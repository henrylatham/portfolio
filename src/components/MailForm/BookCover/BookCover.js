import React from 'react';
import { withPrefix } from 'gatsby'; // , Link when Amazon is live
import styles from './BookCover.module.scss';

const BookCover = ({ author }) => (
  <div className={styles['author']}>
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
  </div>
);

export default BookCover;
