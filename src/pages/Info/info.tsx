import {
  CommentOutlined,
  GithubOutlined,
  LaptopOutlined,
  ScheduleOutlined,
  SoundOutlined,
} from '@ant-design/icons';

import { Button, Carousel, Image } from 'antd';
import { Link } from 'react-router-dom';

import Screen_1 from '../../assets/images/pagesScreens/screen1_light.png';
import Screen_2 from '../../assets/images/pagesScreens/screen2.png';
import Screen_3 from '../../assets/images/pagesScreens/screen3.png';
import Screen_4 from '../../assets/images/pagesScreens/screen4.png';
import LeftQuote from '../../assets/images/logo/left-quote (1).png';

import styles from './info.module.css';

function InfoPage() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.sectionContaier}>
        <div className={styles.infoMainContaier}>
          <div className={styles.teamGreet}>
            <h3>
              Its code<span>Frondlers</span>Team
            </h3>
          </div>
        </div>
        <div className={styles.containerBtn}>
          <Link to="/project">
            <Button size="large" style={{ width: '170px', height: '50px' }}>Read about us</Button>
          </Link>
          <Button size="large" style={{ width: '170px', height: '50px' }}>Read about project</Button>
        </div>

      </section>
      <section className={styles.aboutTeamContainer}>
        <div className={styles.sectionContaier}>
          <div className={styles.sectionTitle}>
            <h2> How we work </h2>
          </div>
          <div className={styles.row}>
            <div className={styles.columnCapabilitis}>
              <div className={styles.icon}>
                <CommentOutlined />
              </div>
              <h3> Effective communication </h3>
              <p>
                Understand the importance of clear and timely communication for
                successful project development.
              </p>
            </div>
            <div className={styles.columnCapabilitis}>
              <div className={styles.icon}>
                <ScheduleOutlined />
              </div>
              <h3> Synchronized work </h3>
              <p>
                Collaborate effectively, sharing ideas and knowledge to achieve
                a common goal. Delegate tasks. Achieve success together.
              </p>
            </div>
            <div className={styles.columnCapabilitis}>
              <div className={styles.icon}>
                <LaptopOutlined />
              </div>
              <h3> Modern Web Development </h3>
              <p>
                Listen to the needs and expectations in order to create a unique
                online space for the store.
              </p>
            </div>
            <div className={styles.columnCapabilitis}>
              <div className={styles.icon}>
                <SoundOutlined />
              </div>
              <h3> Flexibility and adaptability</h3>
              <p>
                Ready to adapt to changes and fix errors on the go. Quickly
                respond to feedback and offer alternative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.teamMemberContainer}>
        <div className={styles.sectionContaier}>
          <div className={styles.teamMemberInfo}>
            <div className={styles.photoBlock}>
              <div className={styles.personPhoto}>
                <div className={styles.personPhotoContainer}>
                  <div className={styles.personPhotoContainerInner}>
                    <img
                      className={styles.img}
                      alt="personal-img"
                    // src={LukshaOlga}
                    />
                  </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.name}>OLYA LUKSHA
                  <Link to="https://github.com/Lukshaolya">
                     <GithubOutlined />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.infoBlock}>
              <div className={styles.textAboutLearning}>
                <span className={styles.quotes}><img src={LeftQuote} alt="quote" /></span>{' '}
                <p>Programing is a big love</p>{' '}
                <span className={styles.quotes}><img src={LeftQuote} alt="quote" /></span>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className={styles.productConatiner}>
        <div className={styles.sectionContaier}>
          <div className={styles.aboutProductBlock}>
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
                    width="100%"
                    style={{ height: '100%', borderRadius: '5%' }}
                    className={styles.carouselItemImg}
                  />
                </div>
                <div>
                  <Image
                    src={Screen_2}
                    alt="CAPSULE"
                    width="100%"
                    style={{ height: '100%', borderRadius: '5%' }}
                    className={styles.carouselItemImg}
                  />
                </div>
                <div>
                  <Image
                    src={Screen_3}
                    alt="CAPSULE"
                    width="100%"
                    style={{ height: '100%', borderRadius: '5%' }}
                    className={styles.carouselItemImg}
                  />
                </div>
                <div>
                  <Image
                    src={Screen_4}
                    alt="CAPSULE"
                    width="100%"
                    style={{ height: '100%', borderRadius: '5%' }}
                    className={styles.carouselItemImg}
                  />
                </div>
              </Carousel>
            </div>
            <div className={styles.productInfo}>
              <div className={styles.productInfoTitle}>

                <h3>Our case</h3>
              </div>
              <div>
                <p className={styles.progectName}> Super Store</p>
                <p className={styles.progectDiscription}>
                  {' '}
                  is more than just an online retailer. its a gaming haven where
                  passion, affordability, and community come together. Join us
                  today and experience the convenience, variety, and excitement
                  of shopping for video games without leaving the comfort of
                  your home. Get ready to embark on countless virtual adventures
                  and immerse yourself in the world of gaming like never before!
                </p>
                <Link to="/project">
                  <Button size="large">Learn more</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoPage;
