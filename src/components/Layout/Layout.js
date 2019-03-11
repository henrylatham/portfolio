import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';
import Banner from './Banner';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <Banner />
    {children}
  </div>
);

export default Layout;
