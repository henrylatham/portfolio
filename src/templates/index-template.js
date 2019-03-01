import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Welcome from '../components/Welcome';
// import Feed from '../components/Feed';
import Page from '../components/Page';
// import Pagination from '../components/Pagination';

const IndexTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    author
  } = data.site.siteMetadata;

  const {
    currentPage,
    // hasNextPage,
    // hasPrevPage,
    // prevPagePath,
    // nextPagePath
  } = pageContext;

  // const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;


  // <Feed edges={edges} />
  // <Pagination
  //   prevPagePath={prevPagePath}
  //   nextPagePath={nextPagePath}
  //   hasPrevPage={hasPrevPage}
  //   hasNextPage={hasNextPage}
  // />

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <Welcome author={author}/>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
        author {
          name
          portrait
        }
      }
    }
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
