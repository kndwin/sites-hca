import React from 'react'
import Layout from '../components/layout.js'
import { graphql } from 'gatsby'

export default function Blog ({ data }) {
  console.log(data)
  return (
    <Layout>
      <h1>Community blog</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title}{" "} - {node.frontmatter.date}</h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          html
          excerpt
          timeToRead
        }
      }
    }
  }
`
