import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

export const PureTagsList = ({ data }) => {
  const { group } = data.allMarkdownRemark;


  return (
  <div>
    <ul>
      <h1>Test Test Test</h1>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
      </ul>
  </div>

  );
};

export const TagsList = (props) => (
  <StaticQuery
    query={graphql`
      query TagsListFullQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => <PureTagsList {...props} data={data}/>}
  />
);


export default TagsList;
