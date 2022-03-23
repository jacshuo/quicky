import { useRoutes } from 'react-router-dom';

import './App.scss';
import routes from './routes';

export default function App() {
  return <>{useRoutes(routes)}</>;
}
