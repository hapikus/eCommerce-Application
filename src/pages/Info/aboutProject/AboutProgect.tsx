// import { Button, Carousel } from 'antd';
// import { Link } from 'react-router-dom';
import { CheckOutlined, GithubOutlined, MehOutlined } from '@ant-design/icons';
import { Button, Carousel, Timeline, Image, List } from 'antd';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './aboutProject.module.css';

// import Screen_1 from '../../../assets/images/pagesScreens/screen1_light.png';
// import Screen_2 from '../../../assets/images/pagesScreens/screen2.png';
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
              {/* <div className={styles.productInfoTitle}>
                <h3>Our case</h3>
              </div> */}
              <div>
                <p className={styles.progectName}> Super Store</p>
                <p className={styles.progectDiscription}>
                  {' '}
                  Welcome to Super Store, your ultimate online destination for all things gaming!
                </p>
                <div className={styles.list}>
                  {/* <ul>
                  <li> the best gaming experience possible</li>
                  <li>wide range of games</li>
                  <li>competitive prices and frequent discounts </li>
                  <li>comfortable UX/UI design</li>
                </ul> */}
                 </div>
                  <List
                    itemLayout="horizontal"
                    dataSource={data}
                    style={{fontSize: '18px', textAlign: 'left', marginLeft: '30px', fontStyle: 'normal'}}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          // avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                          title={item.title}
                        // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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
                    style={{ height: '100%', }}
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
                style={{ fontSize: '40px', color: 'black', }}
                items={[

                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitle}>
                          <p>CodeFrondlers team was created</p>
                        </div>
                      </div>
                    ),
                    dot: <MehOutlined style={{
                      fontSize: '40px',
                      backgroundColor: 'white',
                      color: 'black', marginBottom: '30px'
                    }} />,
                    color: 'white',
                  },
                  {
                    children:
                      (
                        <div className={styles.period}>
                          <div className={styles.timePeriodTitle}>
                            <p>Task Board</p>
                          </div>
                          <div className={styles.timePeroidText}>
                            {/* <p>Every fhgfhgfh</p> */}
                          </div>
                        </div>),
                    color: 'blue',
                  },
                  {
                    dot: <GithubOutlined style={{
                      fontSize: '40px',
                      // backgroundColor: 'none',
                      color: 'black', padding: '30px',
                      borderRadius: '50%'
                    }} />,
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitle}>
                          <p>Create GitHub repository</p>
                        </div>
                      </div>),
                  },
                  {

                    color: 'red',
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitle}>
                          <p>Brain Storm</p>
                        </div>
                      </div>),
                  },
                  {
                    children: (
                      <div className={styles.period}>
                        <div className={styles.timePeriodTitle}>
                          <p>Create a services site</p>
                        </div>
                      </div>),
                  },
                ]}
              />
            </div>
            <div className={styles.appBlocks}>
              <div className={styles.jiraBlock}>
                <div className={styles.jiraBlockHeader}><img src={JiraLogo} alt="logo" />Jira</div>
                <div className={styles.jiraBlockBody}>
                  <ul>
                    <li>
                      <CheckOutlined
                        style={{ paddingRight: '10px', fontSize: '24px', color: 'green' }} />
                      Meetting, Monday</li>
                    <li>
                      <CheckOutlined
                        style={{ paddingRight: '10px', fontSize: '24px', color: 'green' }}
                      /> Meetting, Wensday</li>
                    <li><CheckOutlined 
                    style={{ paddingRight: '10px', fontSize: '24px', }}/> Meetting, Friday</li>
                  </ul>
                </div>
              </div>
              <div className={styles.gitBlock}>
                <div className={styles.gitBlockHeader}><GithubOutlined />Git Hub</div>
                <div className={styles.gitBlockBody}><p>hapikus / </p><span>eCommerce-Application</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sprint_2}>
        <h2>Sprint 2</h2>
        <h3>Login, Registration, and Main Pages Implementation</h3>
        <div className={styles.s1Container}>
          <div>
            <Timeline
              mode="alternate"
              // tailColor: 'black'
              style={{ fontSize: '24px', color: 'black' }}
              items={[
                {
                  children: 'Call meeting every Mn, Wd, Fd',
                },
                {
                  children:
                    'Login page ',
                  color: 'green',
                },
                // {
                //   dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                //   children: 'Create own server',
                // },
                {
                  color: 'red',
                  children: 'Registaration page',
                },
                // {
                //   children: 'Create a services site 2015-09-01',
                // },
                // {
                //   dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                //   children: 'Technical testing 2015-09-01',
                // },
              ]}
            />
          </div>
          <div>
            <div className={styles.jiraBlock}>
              <div className={styles.jiraBlockHeader}>Jira</div>
              <div className={styles.jiraBlockBody}>Create Task Bord</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutProject;
