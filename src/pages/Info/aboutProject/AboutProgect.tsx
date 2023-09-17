// import { Button, Carousel } from 'antd';
// import { Link } from 'react-router-dom';
import { CheckOutlined, GithubOutlined, MehOutlined } from '@ant-design/icons';
import { Button, Carousel, Timeline, Image, List, } from 'antd';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './aboutProject.module.css';

import Screen_1 from '../../../assets/images/pagesScreens/screen1_light.png';
import Screen_2 from '../../../assets/images/pagesScreens/screen2.png';
import Screen_3 from '../../../assets/images/pagesScreens/screen3.png';
import Screen_4 from '../../../assets/images/pagesScreens/screen4.png';
import ReactLogo from '../../../assets/images/logo/react_logo.png';
import AntdLogo from '../../../assets/images/logo/Ant_logo.png';
import TSLogo from '../../../assets/images/logo/TS_logo.png';
import RLogo from '../../../assets/images/logo/redux_logo.png';
import JiraLogo from '../../../assets/images/logo/jira_logo.png';
import Logo from '../../../assets/images/logo/download (1).png';
import LoginImg from '../../../assets/images/pagesScreens/loginPage.png';

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
  return (
    <div className={styles.pageContainer}>
      <section className={styles.productConatiner}>
        <div className={styles.sectionContaier}>
          <div className={styles.aboutProductBlock}>
            <div className={styles.productInfo}>
              <div>
                <p className={styles.progectName}> Super Store</p>
                <p className={styles.progectDiscription}>
                  {' '}
                  Welcome to Super Store, your ultimate online destination for
                  all things gaming!
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
                    fontWeight: '500'
                  }}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<MehOutlined />}
                        title={item.title}
                        style={{fontFamily: 'Poppins',fontWeight: '500'}}
                      />
                    </List.Item>
                  )}
                />
              </div>
            </div>
            <div className={styles.productSlader}>
              <Carousel
                className={styles.imgCarousel}
                dots={{ className: styles.carouselDots }}
                autoplay
              >
                <div>
                  <Image
                    src={Screen_1}
                    alt="CAPSULE"
                    // width="100%"
                    style={{ height: '100%' }}
                    className={styles.carouselItemImg}
                  />
                </div>
                <div>
                  <Image
                    src={Screen_2}
                    alt="CAPSULE"
                    // width="100%"
                    style={{ height: '100%' }}
                    className={styles.carouselItemImg}
                  />
                </div>
                <div>
                  <Image
                    src={Screen_3}
                    alt="CAPSULE"
                    // width="100%"
                    style={{ height: '100%' }}
                    className={styles.carouselItemImg}
                  />
                </div>
                <div>
                  <Image
                    src={Screen_4}
                    alt="CAPSULE"
                    // width="100%"
                    style={{ height: '100%' }}
                    className={styles.carouselItemImg}
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
            <div className={styles.block}>
              <img src={ReactLogo} alt="logo" />
            </div>
            <div className={styles.block}>
              <img src={RLogo} alt="logo" />
            </div>
            <div className={styles.block}>
              <img src={Logo} alt="logo" />
            </div>
            <div className={styles.block}>
              <img src={TSLogo} alt="logo" />
            </div>
            <div className={styles.block}>
              <img src={AntdLogo} alt="antd" />
            </div>
          </div>
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
                style={{ fontSize: '40px', color: 'black', backgroundColor: 'rgb(230, 230, 230)',    paddingBlock: '0' }}
                items={[
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <p>CodeFrondlers team was created</p>
                        </div>
                      </div>
                    ),
                    dot: (
                      <MehOutlined
                        style={{
                          fontSize: '40px',
                          backgroundColor: 'rgb(230, 230, 230)',
                          color: 'black',
                          marginBottom: '30px',
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
                          {/* <p>Every fhgfhgfh</p> */}
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
                          padding: '30px',
                          borderRadius: '50%',
                        }}
                      />
                    ),
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <p>Create GitHub repository</p>
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
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <p>Create a services site</p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
            <div className={styles.appBlocks}>
              <div className={styles.jiraBlock}>
                <div className={styles.jiraBlockHeader}>
                  <img src={JiraLogo} alt="logo" />
                  Jira
                </div>
                <div className={styles.jiraBlockBody}>
                  <ul>
                    <li>
                      <CheckOutlined
                        style={{
                          paddingRight: '10px',
                          fontSize: '24px',
                          color: 'green',
                        }}
                      />
                      Meetting, Monday
                    </li>
                    <li>
                      <CheckOutlined
                        style={{
                          paddingRight: '10px',
                          fontSize: '24px',
                          color: 'green',
                        }}
                      />{' '}
                      Meetting, Wensday
                    </li>
                    <li>
                      <CheckOutlined
                        style={{ paddingRight: '10px', fontSize: '24px' }}
                      />{' '}
                      Meetting, Friday
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.gitBlock}>
                <div className={styles.gitBlockHeader}>
                  <GithubOutlined />
                  Git Hub
                </div>
                <div className={styles.gitBlockBody}>
                  <p>hapikus / </p>
                  <span>eCommerce-Application</span>
                </div>
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
                          <p>Seliones</p>
                         
                        </div>
                        <div className={styles.timePeroidText}>
                          <p>Implement client-side validation for all required fields in the registration form</p>
                          <p>Implement routing for navigation</p>
                        </div>
                      </div>
                    ),
                    color: 'white',
                  },
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleLeft}>
                          <p>Hapikus</p>
                         
                        </div>
                        <div className={styles.timePeroidTextLeft}>
                          <p>Implement client-side validation for all required fields in the registration form</p>
                          <p>Implement routing for navigation</p>
                        </div>
                      </div>
                    ),
                    color: 'blue',
                  },
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitleRight}>
                          <p>Lukshaolya</p>
                         
                        </div>
                        <div className={styles.timePeroidText}>
                          <p>Implement client-side validation for all required fields in the registration form</p>
                          <p>Implement routing for navigation</p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    color: 'red',
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitle}>
                          <p>Brain Storm</p>
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
            </div>
          </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutProject;
