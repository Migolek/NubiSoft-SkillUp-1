import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import logo from '@/assets/images/logo_color.png';

import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.linksWrapper}>
        <NavLink to="/" className={({ isActive }) => (isActive ? classNames(styles.link, styles.active) : styles.link)}>
          Dashboard
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? classNames(styles.link, styles.active) : styles.link)}>
          Users
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? classNames(styles.link, styles.active) : styles.link)}>
          Posts
        </NavLink>
        <NavLink
          to="/todos"
          className={({ isActive }) => (isActive ? classNames(styles.link, styles.active) : styles.link)}>
          Todos (RTK Slice)
        </NavLink>
      </div>
    </section>
  );
}
