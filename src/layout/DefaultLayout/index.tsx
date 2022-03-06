import { ReactElement } from 'react';

import Footer from '@/layout/DefaultLayout/Footer';
import Header from '@/layout/DefaultLayout/Header';
import Sidebar from '@/layout/DefaultLayout/Sidebar';

import styles from './DefaultLayout.module.scss';

type Props = {
  children: ReactElement;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </section>
  );
}
