import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Welcome from '../components/Welcome';
import Consultation from '../components/Consultation';

// To create new page, go to gatsbsy/create-pages.js

const FreeConsultationTemplate = ({ data }) => {
  const {
    title,
    subtitle,
    author,
    clients,
  } = data.site.siteMetadata;

  return (
    <Layout title={`Free Consultation - ${title}`} description={subtitle}>
      <Page title="">
        <Consultation clients={clients} />
        <Welcome author={author} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query FreeConsultationQuery {
    site {
      siteMetadata {
        title
        subtitle
        author {
          name
          portrait
        }
        clients {
          companies
          list
        }
      }
    }
  }
`;

export default FreeConsultationTemplate;
