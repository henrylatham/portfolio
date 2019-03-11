import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';
import { getContactHref } from '../../utils';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <a
      className={styles.layout__bookoffer}
      href={getContactHref('book')}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={styles.layout__bookoffer_text}>
      Download the FREE introduction to my new book: <b><i>Building for Product Success</i></b>
      </div>
    </a>
    {children}
  </div>
);

export default Layout;
