import React from 'react';
import { Typography } from 'antd';

const Home: React.FC<any> = () => {
  return (
    <Typography.Paragraph>
      <Typography.Title level={3}>
        Jacshuo&#39;s Antd Electron APP
      </Typography.Title>
      Quickly build a native app on PC with React, Antd and Electron.
    </Typography.Paragraph>
  );
};

export default Home;
