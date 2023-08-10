/* eslint-disable react/react-in-jsx-scope */
import { Outlet, Link } from 'react-router-dom';
import { Layout } from 'antd';
import AppRoutes from '../router';
// import { Menu } from 'antd';

function PageContent() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default PageContent;
