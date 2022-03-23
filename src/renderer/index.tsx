import { render } from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { MemoryRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
