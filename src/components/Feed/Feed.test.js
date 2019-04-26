import React from 'react';
import renderer from 'react-test-renderer';
import Feed from './Feed';

describe('Feed', () => {
  const props = {
    edges: [
      {
        node: {
          // excerpt: 'Test excerpt',
          fields: {
            slug: '/test_0',
            categorySlug: '/test_0'
          },
          frontmatter: {
            date: '2016-09-01',
            category: 'test_0',
            title: 'test_0',
            description: 'test_desc',
          }
        }
      },
      {
        node: {
          // excerpt: 'Test excerpt',
          fields: {
            slug: '/test_1',
            categorySlug: '/test_1'
          },
          frontmatter: {
            date: '2016-09-01',
            category: 'test_1',
            title: 'test_1',
            description: 'test_desc',
          }
        }
      }
    ]
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Feed {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
