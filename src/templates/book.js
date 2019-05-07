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
        <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/owxq7zVWM6I?rel=0&amp;controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
