import styles from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className={styles.section}>
      <p className={styles.copyright}>SkillUp #1 - NubiSoft &#169; {year}</p>
    </section>
  );
}
