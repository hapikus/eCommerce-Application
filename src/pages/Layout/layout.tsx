import { Layout, Space } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import styles from './layout.module.css';

function LayoutPage() {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Header className={styles.header}>
          <Header />
        </Layout.Header>
        <Layout.Content className={styles.content}>
          <Outlet />
        </Layout.Content>
        <Layout.Footer className={styles.footer}>
          <Footer />
        </Layout.Footer>
      </Layout>
    </Space>
  );
}

export default LayoutPage;
