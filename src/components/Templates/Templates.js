import React from 'react';
import { withPrefix } from 'gatsby';
import styles from './Templates.module.scss';

const Templates = ({ templates }) => (
  <div className={styles['templates']}>

    <div className={styles['templates__example']}>
      <h4 className={styles['templates__example_header']}>Vision & Strategic Assumptions Template:</h4>
      <img
        src={withPrefix(templates.vision)}
        className={styles['templates__example_img']}
        alt={templates.visionAlt}
      />
      <a
        className={styles['templates__example_btn']}
        href={templates.visionStrategySheets}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download template
      </a>
    </div>

    <div className={styles['templates__example']}>
      <h4 className={styles['templates__example_header']}>Strategy Validation Template:</h4>
      <img
        src={withPrefix(templates.strategy)}
        className={styles['templates__example_img']}
        alt={templates.strategyAlt}
      />
      <a
        className={styles['templates__example_btn']}
        href={templates.visionStrategySheets}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download template
      </a>
    </div>

    <div className={styles['templates__example']}>
      <h4 className={styles['templates__example_header']}>Experiments & Validation Template:</h4>
      <img
        src={withPrefix(templates.experiments)}
        className={styles['templates__example_img']}
        alt={templates.experimentsAlt}
      />
      <a
        className={styles['templates__example_btn']}
        href={templates.experimentsFiles}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resource
      </a>
    </div>

    <div className={styles['templates__example']}>
      <h4 className={styles['templates__example_header']}>Team Retrospective</h4>
      <img
        src={withPrefix(templates.retrospective)}
        className={styles['templates__example_img']}
        alt={templates.retrospectiveAlt}
      />
      <a
        className={styles['templates__example_btn']}
        href={templates.retrospectiveFiles}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resource
      </a>
    </div>

    <div className={styles['templates__example']}>
      <h4 className={styles['templates__example_header']}>User Testing Resources:</h4>
      <img
        src={withPrefix(templates.userTesting)}
        className={styles['templates__example_img']}
        alt={templates.userTestingAlt}
      />
      <a
        className={styles['templates__example_btn']}
        href={templates.userTestingFiles}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resource
      </a>
    </div>

  </div>
);

export default Templates;
