import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import MailForm from '../components/MailForm';

const Book = ({ data }) => {
  const {
    title,
    subtitle
  } = data.site.siteMetadata;

  return (
    <Layout title={`Book - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title=" ">
        <MailForm />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query BookQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default Book;
