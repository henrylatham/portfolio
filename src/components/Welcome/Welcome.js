import React from 'react';
import { withPrefix } from 'gatsby';
import styles from './Welcome.module.scss';

const Welcome = ({ author }) => (
  <div className={styles['welcome']}>
    <img
      src={withPrefix(author.portrait)}
      className={styles['author__portrait']}
      alt={author.name}
    />
  </div>
);

export default Welcome;
