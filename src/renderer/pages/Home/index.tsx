import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { selectCount, delayedAdd } from '../../store/fooSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Home: React.FC<any> = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(delayedAdd());
  }, []);
  return (
    <Typography.Paragraph>
      <Typography.Title level={3}>
        Jacshuo&#39;s Antd Electron APP
      </Typography.Title>
      Quickly build a native app on PC with React, Redux, Antd and Electron.
      <Typography.Title level={3}>Redux</Typography.Title>
      Will Async add this count in 3 sec: {count}
    </Typography.Paragraph>
  );
};

export default Home;
