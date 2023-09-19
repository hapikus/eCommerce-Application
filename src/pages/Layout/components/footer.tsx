import { useEffect, useState } from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { Menu, message, Button } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import { RootState } from '../../../redux/store';
import ProductService from '../../../models/Product/ProductService';

import MarkupSVGGit from './logoGit';
import MarkupSVGRSS from './logoRSS';

function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function Footer() {
  const [randomProduct, setRandomProduct] = useState('Path of Exile');
  const [currentSize, setCurrentSize] = useState(getWindowSize());

  const isRandomLoading = useSelector(
    (state: RootState) => state.product.isLoadingRandom,
  );

  useEffect(() => {
    function handleResize() {
      setCurrentSize(getWindowSize());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  async function fetchRandomProduct() {
    try {
      const response = await ProductService.getRandProducts(1);
      const [product] = response.data;
      setRandomProduct(product.gameTitle);
    } catch (error) {
      message.error('Error fetching random product');
    }
  }

  const handleLinkClick = () => {
    fetchRandomProduct();
  };

  useEffect(() => {
    fetchRandomProduct();
  }, []);
  return (
    <div className={styles.footer}>
      <div className={styles.rule} />
      <div className={styles.footerFirstLine}>
        <div className={styles.userCont}>
          <Button type="link">
            <Link to="/login">Sign in</Link>
          </Button>
          <Button type="link">
            <Link to="/signup">Sign up</Link>
          </Button>
          <Button type="link">
            <Link to="/user">User</Link>
          </Button>
        </div>
        <div className={styles.productCont}>
          <Menu
            mode={currentSize.width > 630 ? 'horizontal' : 'horizontal'}
            selectable={false}
            disabledOverflow
            style={{ borderInlineEnd: 'none' }}
          >
            <Menu.Item key="home">
              <Link to="/">Main</Link>
            </Menu.Item>
            <Menu.Item key="catalog">
              <Link to="/catalog">Catalog</Link>
            </Menu.Item>
            <Menu.Item
              key="product"
              onClick={handleLinkClick}
              disabled={isRandomLoading}
            >
              <Link to={`/product/${randomProduct}`}>Product</Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className={styles.infoCardCont}>
          <Menu
            mode={currentSize.width > 630 ? 'horizontal' : 'horizontal'}
            selectable={false}
            disabledOverflow
            style={{ borderInlineEnd: 'none' }}
          >
            <Menu.Item key="info">
              <Link to="/info">Info</Link>
            </Menu.Item>
            <Menu.Item key="cart">
              <Link to="/cart">Cart</Link>
            </Menu.Item>
          </Menu>
        </div>
        {currentSize.width < 420 ? null : (
          <div className={styles.githubLinks}>
            <Menu
              mode={currentSize.width > 630 ? 'horizontal' : 'horizontal'}
              selectable={false}
              disabledOverflow
              style={{ borderInlineEnd: 'none' }}
            >
              <Menu.Item key="1">
                <a
                  href="https://github.com/hapikus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOutlined /> hapikus
                </a>
              </Menu.Item>
              <Menu.Item key="2">
                <a
                  href="https://github.com/Lukshaolya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOutlined /> Lukshaolya
                </a>
              </Menu.Item>
              <Menu.Item key="3">
                <a
                  href="https://github.com/SwallowOnes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOutlined /> SwallowOnes
                </a>
              </Menu.Item>
            </Menu>
          </div>
        )}
      </div>
      <div className={styles.footerSecondLine}>
        <a href="https://rs.school/" target="_blank" rel="noreferrer">
          <MarkupSVGRSS />
        </a>
        <h1 className={styles.footerBigText}>© 2023 Code Frondlers</h1>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <MarkupSVGGit />
        </a>
      </div>
      <div className={styles.rule} />
    </div>
  );
}

export default Footer;
