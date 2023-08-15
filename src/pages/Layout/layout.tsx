import { Layout, Space } from 'antd';
import { Outlet } from 'react-router-dom';
import AppRoutes from '../router';
import HeaderUi from './components/Header';
import FooterUi from './components/Footer';
import styles from './layout.module.css';

const { Header, Content, Footer } = Layout;

function LayoutUi() {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className={styles.header}>
          <HeaderUi />
        </Header>
        <Content className={styles.content}>
          <AppRoutes />
          <Outlet />
        </Content>
        <Footer className={styles.footer}>
          <FooterUi />
        </Footer>
      </Layout>
    </Space>
  );
}

export default LayoutUi;
