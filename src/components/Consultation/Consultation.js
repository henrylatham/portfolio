import React from 'react';
import { withPrefix } from 'gatsby';
import styles from './Consultation.module.scss';

const Consultation = ({ clients }) => (
  <div className={styles['consultation']}>
    <h1 className={styles['consultation__header']}>Get your free 15-minute consultation</h1>
    <p className={styles['consultation__text']}>Get expert answers to your most critical product development questions</p>
    <a
      className={styles['consultation__button']}
      href={'https://henrylatham.youcanbook.me'}
      target="_blank"
      rel="noopener noreferrer"
    >
      Book a free consultation
    </a>
    <div className={styles['consultation__clients']}>
      <h5>Previous clients:</h5>
      <img
        src={withPrefix(clients.companies)}
        className={styles['consultation__clients_img']}
        alt={clients.list}
      />
    </div>
  </div>
);

export default Consultation;
