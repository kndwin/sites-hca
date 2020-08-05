import React from "react"
import styles from "./layout.module.scss"
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Layout ({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={styles.container}>
      <h1>{data.site.siteMetadata.title}</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about/">About</Link>
        <Link to="/contact/">Contact</Link>
        <Link to="/blog/">Blog</Link>
      </nav>
      { children }
    </div>
  )
}
