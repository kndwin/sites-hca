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
      <nav className={styles.nav_wrapper}>
        <h1>
          {data.site.siteMetadata.title}
        </h1>
        <div className={styles.link_wrapper}>
          <Link to="/"
            className={styles.link}>
            Home
          </Link>
          <Link to="/community-blog/"
            className={styles.link}>
            Community Blog
          </Link>
          <Link to="/about-us/"
            className={styles.link}>
            About Us
          </Link>
          <Link to="/contact-us/"
            className={styles.link}>
            Contact Us
          </Link>
        </div>
      </nav>
      <body className={styles.body}>
        { children }
      </body>
      <footer className={styles.footer}>
        I'm a footer
      </footer>
    </div>
  )
}
