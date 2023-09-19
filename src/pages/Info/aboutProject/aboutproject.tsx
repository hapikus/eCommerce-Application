import { GithubOutlined, MehOutlined } from '@ant-design/icons';
import { Button, Carousel, Timeline, Image, List, Card } from 'antd';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './aboutProject.module.css';

import ReactLogo from '../../../assets/images/logo/react_logo.png';
import AntdLogo from '../../../assets/images/logo/Ant_logo.png';
import TSLogo from '../../../assets/images/logo/TS_logo.png';
import RLogo from '../../../assets/images/logo/redux_logo.png';
import Screen_5 from '../../../assets/images/pagesScreens/user_1.png';
import Screen_6 from '../../../assets/images/pagesScreens/cart_3.png';
import JiraBordImg from '../../../assets/images/pagesScreens/taskboard.png';
import EslintLogo from '../../../assets/images/logo/ESLint_logo.svg.png';
import JestLogo from '../../../assets/images/logo/jest.png';
import AxiousLogo from '../../../assets/images/logo/Axious.png';
import ViteLogo from '../../../assets/images/logo/vite-js-logo.png';
import PrettierLogo from '../../../assets/images/logo/prettier-logo.png';
import LoginImg from '../../../assets/images/pagesScreens/loginPage.png';
import SelionesImg from '../../../assets/images/teamPhoto/selionis icon.png';
import HapikusImg from '../../../assets/images/teamPhoto/hapikus icon.png';
import LukshaOlgaImg from '../../../assets/images/teamPhoto/lukshaolga icon.png';
import CardImg from '../../../assets/images/logo/superStore.png';
import DataBase from '../../../assets/images/pagesScreens/DataBase.png';
import MainOneImg from '../../../assets/images/pagesScreens/main_1.png';
import SignInImg from '../../../assets/images/pagesScreens/signIn.png';
import CatalogTwoImg from '../../../assets/images/pagesScreens/catalog_2.png';
import Page from '../../../assets/images/pagesScreens/main_2.png';
import ExpressJsLogo from '../../../assets/images/logo/expressjs_logo.png';
import NodeJsLogo from '../../../assets/images/logo/nodejsicon.png';
import MongoDBLogo from '../../../assets/images/logo/mongo_logo.png';
import JsonLogo from '../../../assets/images/logo/jsonwebtoken_logo.png';
import NodeMailerLogo from '../../../assets/images/logo/nodemailer_logo.png';
import BCryptLogo from '../../../assets/images/logo/bcrypt-logo.webp';
import SwaggerLogo from '../../../assets/images/logo/swagger_logo.png';

function AboutProject() {
  const data = [
    {
      title: 'the best gaming experience possible',
    },
    {
      title: 'wide range of games',
    },
    {
      title: 'competitive prices and frequent discounts',
    },
    {
      title: 'comfortable UX/UI design',
    },
  ];

  const dataClient = [
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>Based</h3>
          <div className={styles.logosCont}>
            <img src={TSLogo} alt="logo" className={styles.clientServerImg} />
            <img
              src={ReactLogo}
              alt="logo"
              className={styles.clientServerImg}
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>State</h3>
          <img src={RLogo} alt="logo" className={styles.clientServerImg} />
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>Bunding</h3>
          <img src={ViteLogo} alt="logo" className={styles.clientServerImg} />
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>HTTP Requests</h3>
          <img src={AxiousLogo} alt="logo" className={styles.clientServerImg} />
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>Testing</h3>
          <img src={JestLogo} alt="logo" className={styles.clientServerImg} />
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>Code Quality</h3>
          <div className={styles.logosCont}>
            <img
              src={PrettierLogo}
              alt="logo"
              className={styles.clientServerImg}
            />
            <img
              src={EslintLogo}
              alt="logo"
              className={styles.clientServerImg}
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>Styles</h3>
          <img src={AntdLogo} alt="antd" />
        </div>
      ),
    },
  ];

  const dataServer = [
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>Based</h3>
          <img src={NodeJsLogo} alt="logo" className={styles.clientServerImg} />
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>Database</h3>
          <img
            src={MongoDBLogo}
            alt="logo"
            className={styles.clientServerImg}
          />
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>Authentication</h3>
          <img src={JsonLogo} alt="logo" className={styles.clientServerImg} />
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>API Framework</h3>
          <img
            src={ExpressJsLogo}
            alt="logo"
            className={styles.clientServerImg}
          />
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>Security</h3>
          <img src={BCryptLogo} alt="logo" className={styles.clientServerImg} />
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>Email Sending</h3>
          <img
            src={NodeMailerLogo}
            alt="logo"
            className={styles.clientServerImg}
          />
        </div>
      ),
    },
    {
      title: (
        <div className={styles.clientLogo}>
          <h3>Documentation</h3>
          <img
            src={SwaggerLogo}
            alt="antd"
            className={styles.clientServerImg}
          />
        </div>
      ),
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <section className={styles.productConatiner}>
        <div className={styles.sectionContaier}>
          <div className={styles.aboutProductBlock}>
            <div className={styles.productInfo}>
              <p className={styles.progectName}> Super Store</p>
              <p className={styles.progectDiscription}>
                {' '}
                Welcome to Super Store, your ultimate online destination for all
                things gaming!
              </p>
              <List
                itemLayout="horizontal"
                dataSource={data}
                style={{
                  fontSize: '18px',
                  textAlign: 'left',
                  marginLeft: '30px',
                  fontStyle: 'normal',
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                }}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<MehOutlined />}
                      title={item.title}
                      style={{ fontFamily: 'Poppins', fontWeight: '500' }}
                    />
                  </List.Item>
                )}
              />
            </div>
            <div className={styles.productSlader}>
              <Carousel
                className={styles.imgCarousel}
                dots={{ className: styles.carouselDots }}
                autoplay
                infinite
              >
                <div>
                  <Image
                    src={MainOneImg}
                    alt="CAPSULE"
                    style={{ height: '100%' }}
                    className={styles.carouselItemImg}
                    preview={false}
                  />
                </div>
                <div>
                  <Image
                    src={CatalogTwoImg}
                    alt="CAPSULE"
                    style={{ height: '100%' }}
                    className={styles.carouselItemImg}
                    preview={false}
                  />
                </div>
                <div>
                  <Image
                    src={SignInImg}
                    alt="CAPSULE"
                    style={{ height: '100%' }}
                    className={styles.carouselItemImg}
                    preview={false}
                  />
                </div>
                <div>
                  <Image
                    src={Screen_5}
                    alt="CAPSULE"
                    style={{ height: '100%' }}
                    className={styles.carouselItemImg}
                    preview={false}
                  />
                </div>
                <div>
                  <Image
                    src={Screen_6}
                    alt="CAPSULE"
                    style={{ height: '100%' }}
                    className={styles.carouselItemImg}
                    preview={false}
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div className={styles.containerBtn}>
            <Link to="/">
              <Button size="large" style={{ width: '170px', height: '50px' }}>
                Try our site
              </Button>
            </Link>
            <Link to="/info">
              <Button size="large" style={{ width: '170px', height: '50px' }}>
                Read about us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.logoBlock}>
        <div className={styles.sectionContaier}>
          <div className={styles.containerBlock}>
            <Card
              className={styles.contCardClientServ}
              title="CLIENT"
              bordered
              bodyStyle={{ padding: '0px 20px' }}
            >
              <List
                itemLayout="horizontal"
                dataSource={dataClient}
                style={{
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                }}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.title}
                      style={{ fontFamily: 'Poppins', fontWeight: '500' }}
                    />
                  </List.Item>
                )}
              />
            </Card>
            <Card
              title="SERVER"
              bordered
              className={styles.contCardClientServ}
              bodyStyle={{ padding: '0px 20px' }}
            >
              <List
                itemLayout="horizontal"
                dataSource={dataServer}
                style={{
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontFamily: 'Poppins',
                }}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.title}
                      style={{ fontFamily: 'Poppins', fontWeight: '500' }}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </div>
        </div>
        <div className={styles.btnBlock}>
          <h4>Read more about E-com API</h4>
          <Link to="https://codefrondlers.store/api-docs/">
            <Button size="large" style={{ width: '170px', height: '50px' }}>
              To Swagger
            </Button>
          </Link>
        </div>
      </section>
      <section className={styles.sprint_1}>
        <div className={styles.sectionContaier}>
          <div className={styles.sprint_1_title}>
            <h2>Sprint 1</h2>
            <h3>Project Setup and Server Integration</h3>
          </div>
          <div className={styles.column_2}>
            <div className={styles.timeLine}>
              <Timeline
                mode="left"
                style={{
                  fontSize: '40px',
                  color: 'black',
                  paddingBlock: '0',
                }}
                items={[
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <p>CodeFrondlers team was created</p>
                        </div>
                        <div className={styles.timePeroidText}>
                          <p>
                            A group of <b>three young frontend developers</b>{' '}
                            come together to create an online store website.
                          </p>
                        </div>
                      </div>
                    ),
                    dot: (
                      <MehOutlined
                        style={{
                          fontSize: '40px',
                          backgroundColor: 'rgb(230, 230, 230)',
                          color: 'black',
                        }}
                      />
                    ),
                    color: 'white',
                  },
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <p>Task Board</p>
                        </div>
                        <div className={styles.timePeroidText}>
                          <p>
                            Whithout any dobs choose <b>Jira </b> as the tool
                            for task management. Set rules of checking task and
                            meeting schedule.
                          </p>
                        </div>
                      </div>
                    ),
                    color: 'blue',
                  },
                  {
                    dot: (
                      <GithubOutlined
                        style={{
                          fontSize: '40px',
                          backgroundColor: 'rgb(230, 230, 230)',
                          color: 'black',
                          borderRadius: '50%',
                        }}
                      />
                    ),
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <p>Create GitHub repository</p>
                        </div>
                        <div className={styles.timePeroidText}>
                          <p>
                            Our Team lead was responsible to set up repository
                            for the project
                          </p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    color: 'red',
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <p>Brain Storm</p>
                        </div>
                        <div className={styles.timePeroidText}>
                          <p>What we should sell? What design to choose?</p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
            <div className={styles.appBlocks}>
              <div className={styles.loginForm}>
                <img src={JiraBordImg} alt="JiraBordImg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sprint_1}>
        <div className={styles.sectionContaier}>
          <div className={styles.sprint_1_title}>
            <h2>Sprint 2</h2>
            <h3>Login, Registration, and Main Pages Implementation</h3>
          </div>
          <div className={styles.column_2}>
            <div className={styles.timeLine}>
              <Timeline
                mode="alternate"
                style={{ fontSize: '40px', color: 'black' }}
                items={[
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <img src={SelionesImg} alt="icon" />
                          <p>Seliones</p>
                        </div>
                        <div className={styles.timePeroidText}>
                          <p>
                            Creating themes, designing website pages, setting up
                            a server for user-server interaction, and
                            facilitating communication between the frontend and
                            backend of the website.
                          </p>
                        </div>
                      </div>
                    ),
                    color: 'white',
                  },
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleLeft}>
                          <img src={HapikusImg} alt="icon" />
                          <p>Hapikus</p>
                        </div>
                        <div className={styles.timePeroidTextLeft}>
                          <p>
                            Login page. Code reviews and requested
                            implementations. Discussed topics such as the
                            vite.config.ts file, implementation and validation
                            of dobValid.ts, the database for products.
                          </p>
                        </div>
                      </div>
                    ),
                    color: 'blue',
                  },
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <img src={LukshaOlgaImg} alt="icon" />
                          <p>Lukshaolya</p>
                        </div>
                        <div className={styles.timePeroidText}>
                          <p>
                            Implement client-side validation for all required
                            fields in the registration form. Implement routing
                            for navigation.
                          </p>
                          <p>404 page ideas.</p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    color: 'red',
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleLeft}>
                          <p>Brain Storm</p>
                        </div>
                        <div className={styles.timePeroidTextLeft}>
                          <p>
                            Discussion about the main page design and the
                            decision to take inspiration from the Steam website.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
            <div className={styles.appBlocks}>
              <div className={styles.loginForm}>
                <img src={LoginImg} alt="login" />
                <img src={DataBase} alt="data" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sprint_1}>
        <div className={styles.sectionContaier}>
          <div className={styles.sprint_1_title}>
            <h2>Sprint 3</h2>
            <h3>
              {' '}
              Catalog Product Page, Detailed Product Page & User Profile Page
              Implementation
            </h3>
          </div>
          <div className={classNames(styles.column_2, styles.column2reverse)}>
            <div className={styles.timeLine}>
              <Timeline
                mode="right"
                style={{ fontSize: '40px', color: 'black' }}
                items={[
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleLeft}>
                          <img src={HapikusImg} alt="icon" />
                          <p>Hapikus</p>
                        </div>
                        <div className={styles.timePeroidTextLeft}>
                          <p>
                            Detailed product page. Bright discription of each
                            product on spesial page with images of a selected
                            product.{' '}
                          </p>
                        </div>
                      </div>
                    ),
                    color: 'blue',
                  },
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleLeft}>
                          <img src={LukshaOlgaImg} alt="icon" />
                          <p>Lukshaolya</p>
                        </div>
                        <div className={styles.timePeroidTextLeft}>
                          <p>User page.</p>
                          <p>
                            Implement opportunity to change personal data and
                            dynamic adding of several addresses.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleLeft}>
                          <img src={SelionesImg} alt="icon" />
                          <p>Seliones</p>
                        </div>
                        <div className={styles.timePeroidTextLeft}>
                          <p>
                            Main and Catalog Page. Implement filtering options
                            for users to refine the product list based on
                            attributes such as price range, brand, name,
                            category. Convenient slider on main page.
                          </p>
                        </div>
                      </div>
                    ),
                    color: 'white',
                  },
                ]}
              />
            </div>
            <div className={styles.appBlocks}>
              <div className={styles.loginForm}>
                <img src={Page} alt="login" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sprint_1}>
        <div className={styles.sectionContaier}>
          <div className={styles.sprint_1_title}>
            <h2>Sprint 4</h2>
            <h3>
              {' '}
              Basket Page, Catalog Page Enhancements, and About Us Page
              Implementation
            </h3>
          </div>
          <div className={styles.column_2}>
            <div className={styles.timeLine}>
              <Timeline
                mode="left"
                style={{ fontSize: '40px', color: 'black' }}
                items={[
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <img src={LukshaOlgaImg} alt="icon" />
                          <p>Lukshaolya</p>
                        </div>
                        <div className={styles.timePeroidText}>
                          <p>About Project page.</p>
                          <p>
                            Tried to reconstruct the events of the last two
                            months and evaluate the results of the work done.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <img src={HapikusImg} alt="icon" />
                          <p>Hapikus</p>
                        </div>
                        <div className={styles.timePeroidText}>
                          <p>
                            Basket Page. Implement oppotunity to clear, add,
                            remove a list of products in basket.
                          </p>
                        </div>
                      </div>
                    ),
                    color: 'blue',
                  },

                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <img src={SelionesImg} alt="icon" />
                          <p>Seliones</p>
                        </div>
                        <div className={styles.timePeroidText}>
                          <p>
                            Catalog Page integration with Basket Page.
                            Paggination and some performance optimization tools.
                          </p>
                        </div>
                      </div>
                    ),
                    color: 'white',
                  },
                ]}
              />
            </div>
            <div className={styles.appBlocks}>
              <div className={styles.loginForm}>
                <img src={CardImg} alt="login" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutProject;
