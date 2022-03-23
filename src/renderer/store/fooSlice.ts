import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Foo {
  count: number;
  loading: boolean;
}

const initialState: Foo = {
  count: 0,
  loading: false,
};

// API
const fetchAmount = (params): Promise<number> => {
  return new Promise((resolve) => {
    const t = setTimeout(() => {
      clearTimeout(t);
      resolve(+(100 * Math.random()).toFixed(0));
    }, params);
  });
};

// 异步reducer
export const delayedAdd = createAsyncThunk(
  'foo/delayedAdd',
  async (params, thunkAPI) => {
    const res = await fetchAmount(params);
    // thunkAPI.dispatch(fooSlice.actions.add(res));
    return res;
  }
);

export const fooSlice = createSlice({
  name: 'foo',
  initialState,
  // 同步修改器
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    subtract: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
  // 异步修改器
  extraReducers: {
    [delayedAdd.fulfilled.type]: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
      state.loading = false;
    },
    [delayedAdd.pending.type]: (state) => {
      state.loading = true;
    },
    [delayedAdd.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export const { add, subtract } = fooSlice.actions;

//
export const selectCount = (state) => state.foo.count;

export default fooSlice.reducer;
