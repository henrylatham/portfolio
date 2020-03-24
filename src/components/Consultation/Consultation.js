import React from 'react';
import { withPrefix } from 'gatsby';
import styles from './Consultation.module.scss';

const Consultation = ({ clients }) => (
  <div className={styles['consultation']}>
    <h1 className={styles['consultation__header']}>
      Get your free 30-minute consultation
    </h1>
    <p className={styles['consultation__text']}>
      Learn how to not just survive, but thrive, as a product leader in
      uncertain times.
      <br></br><br></br>
      Wage war against efficiency &, instead, focus on what really matters:
      <br></br><br></br>
      <b>Building effective teams & building high-value products.
      </b><br></br><br></br>
    </p>
    <a
      className={styles['consultation__button']}
      href={'https://calendly.com/henry_latham/strategy-session'}
      target="_blank"
      rel="noopener noreferrer"
    >
      Book free consultation
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
