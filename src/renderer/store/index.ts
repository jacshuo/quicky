import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import fooReducer from './fooSlice';

export const store = configureStore({
  reducer: {
    foo: fooReducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === 'development') {
      const logger = createLogger({ level: 'info' });
      return (
        getDefaultMiddleware()
          // prepend and concat calls can be chained
          .concat(logger)
      );
    }
    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV === 'development',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
