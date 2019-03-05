import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const TagsList = ({ data }) => {
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


export const query = graphql`
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
`;


export default TagsList;
