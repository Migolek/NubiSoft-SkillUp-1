import HttpRequestImage from '@/assets/images/http_requests.png';

import styles from './Dashboard.module.scss';

export default function Dashboard() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <img src={HttpRequestImage} alt="http-requests" />
      </div>
    </section>
  );
}
