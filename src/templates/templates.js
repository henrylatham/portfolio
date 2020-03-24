import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import Templates from '../components/Templates';

// To create new page, go to gatsbsy/create-pages.js

const TemplatesTemplate = ({ data }) => {
  const {
    title,
    subtitle,
    templates,
  } = data.site.siteMetadata;

  return (
    <Layout title={`Templates - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="">
        <Templates templates={templates} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query TemplatesTemplateQuery {
    site {
      siteMetadata {
        title
        subtitle
        templates {
          vision
          visionAlt
          strategy
          strategyAlt
          visionStrategySheets
          experiments
          experimentsAlt
          experimentsFiles
          retrospective
          retrospectiveAlt
          retrospectiveFiles
          userTesting
          userTestingAlt
          userTestingFiles
        }
      }
    }
  }
`;

export default TemplatesTemplate;
