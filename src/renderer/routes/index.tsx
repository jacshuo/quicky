import { RouteObject } from 'react-router-dom';
import MainLayout from '../common/layouts';
import Home from '../pages/Home';
import HeadBar from '../common/components/HeadBar';
import SideBar from '../common/components/SideBar';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <MainLayout type="t-ls-m" header={<HeadBar />} sider={<SideBar />} />
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
