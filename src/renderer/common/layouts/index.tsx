import React, { ReactElement, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export interface MainLayoutProps {
  // 't for top bar, m for middle content, b for bottom footer, ls for left sider, rs for right sider'
  type?:
    | 'tmb'
    | 't-ls-m-b'
    | 't-rs-m-b'
    | 't-m'
    | 't-ls-m'
    | 't-rs-m'
    | 'ls-m'
    | 'rs-m'
    | 'ls-m-b'
    | 'rs-m-b';
  header?: ReactNode | ReactElement | React.FC;
  content?: ReactNode | ReactElement | React.FC;
  sider?: ReactNode | ReactElement | React.FC;
  footer?: ReactNode | ReactElement | React.FC;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { type, header, content, sider, footer } = props;
  switch (type) {
    case 'tmb':
      return (
        <>
          <Layout>
            <Header>{header}</Header>
            <Content>{content ?? <Outlet />}</Content>
            <Footer>{footer}</Footer>
          </Layout>
        </>
      );
    case 't-ls-m-b':
      return (
        <>
          <Layout>
            <Header>{header}</Header>
            <Layout>
              <Sider>{sider}</Sider>
              <Content>{content ?? <Outlet />}</Content>
            </Layout>
            <Footer>{footer}</Footer>
          </Layout>
        </>
      );
    case 't-rs-m-b':
      return (
        <>
          <Layout>
            <Header>{header}</Header>
            <Layout>
              <Content>{content ?? <Outlet />}</Content>
              <Sider>{sider}</Sider>
            </Layout>
            <Footer>{footer}</Footer>
          </Layout>
        </>
      );
    case 't-m':
      return (
        <>
          <Layout>
            <Header>{header}</Header>
            <Content>{content ?? <Outlet />}</Content>
          </Layout>
        </>
      );
    case 't-ls-m':
      return (
        <>
          <Layout>
            <Header>{header}</Header>
            <Layout>
              <Sider>{sider}</Sider>
              <Content>{content ?? <Outlet />}</Content>
            </Layout>
          </Layout>
        </>
      );
    case 't-rs-m':
      return (
        <>
          <Layout>
            <Header>{header}</Header>
            <Layout>
              <Content>{content ?? <Outlet />}</Content>
              <Sider>{sider}</Sider>
            </Layout>
          </Layout>
        </>
      );
    case 'ls-m':
      return (
        <>
          <Layout>
            <Sider>{sider}</Sider>
            <Content>{content ?? <Outlet />}</Content>
          </Layout>
        </>
      );
    case 'rs-m':
      return (
        <>
          <Layout>
            <Content>{content ?? <Outlet />}</Content>
            <Sider>{sider}</Sider>
          </Layout>
        </>
      );
    case 'ls-m-b':
      return (
        <>
          <Layout>
            <Layout>
              <Sider>{sider}</Sider>
              <Content>{content ?? <Outlet />}</Content>
            </Layout>
            <Footer>{footer}</Footer>
          </Layout>
        </>
      );
    case 'rs-m-b':
      return (
        <>
          <Layout>
            <Layout>
              <Content>{content ?? <Outlet />}</Content>
              <Sider>{sider}</Sider>
            </Layout>
            <Footer>{footer}</Footer>
          </Layout>
        </>
      );
    default:
      return (
        <>
          <Layout>
            <Header>{header}</Header>
            <Content>{content ?? <Outlet />}</Content>
            <Footer>{footer}</Footer>
          </Layout>
        </>
      );
  }
};

export default MainLayout;
