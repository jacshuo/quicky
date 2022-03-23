import { render } from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { MemoryRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import App from './App';

render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <App />
    </Router>
  </ConfigProvider>,
  document.getElementById('root')
);
