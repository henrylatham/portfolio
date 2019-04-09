import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styles from './Author.module.scss';

export const PureAuthor = ({ data }) => {
  const { author } = data.site.siteMetadata;

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-book']}
          href="https://mailchi.mp/481d8ad40b87/howtobuildgreatproducts"
          rel="noopener noreferrer"
          target="_blank"
          //Get 30% off the new book
        >
        </a>
      </p>
    </div>
  );
};

export const Author = (props) => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
            }
          }
        }
      }
    `}
    render={(data) => <PureAuthor {...props} data={data} />}
  />
);

export default Author;
