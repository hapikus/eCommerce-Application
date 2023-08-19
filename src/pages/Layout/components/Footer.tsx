import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.rule} />
      <div className={styles.footer_logo}>
        <a href="https://rs.school/" target="_blank" rel="noreferrer">
          <div className={styles.footer_logo_rss} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <div className={styles.footer_logo_github} />
        </a>
      </div>
      <div className={styles.footer_text}>
        © 2023 Code Frondlers. Все права защищены. Все торговые марки являются
        собственностью соответствующих владельцев в США и других странах. НДС
        включён во все цены, где он применим. Политика конфиденциальности |
        Правовая информация | Возвраты | Файлы cookie
      </div>
      <h1>2023</h1>
      <div className={styles.rule} />
    </div>
  );
}

export default Footer;
