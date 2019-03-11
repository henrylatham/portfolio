import React from 'react';
import styles from './Banner.module.scss';
import { getContactHref } from '../../../utils';

const Banner = () => (
  <div>
    <a
      className={styles.bookoffer}
      href={getContactHref('book')}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={styles.bookoffer__text}>
      Download the FREE introduction to my new book: <b><i>Building for Product Success</i></b>
      </div>
    </a>
  </div>
);

export default Banner;
