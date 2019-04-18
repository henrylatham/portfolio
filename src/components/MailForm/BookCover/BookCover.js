import React from 'react';
import { graphql, StaticQuery, withPrefix } from 'gatsby'; // , Link when Amazon is live
import styles from './BookCover.module.scss';

const PureBookCover = ({ data }) => {
  const {
    author,
  } = data.site.siteMetadata;


  return (
    <div className={styles['author']}>
        <img
          src={withPrefix(author.book)}
          className={styles['author__book']}
          alt={author.bookName}
        />
    </div>
  );
};

export const BookCover = (props) => (
  <StaticQuery
    query={graphql`
      query BookCoverQuery {
        site {
          siteMetadata {
            author {
              book
              bookName
            }
          }
        }
      }
    `}
    render={(data) => <PureBookCover {...props} data={data}/>}
  />
);

export default BookCover;
