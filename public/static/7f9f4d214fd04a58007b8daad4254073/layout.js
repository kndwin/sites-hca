import React from "react"
import styles from "./layout.module.scss"
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Layout ({ children, page }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            phone
          }
        }
      }
    `
  )

  const setBanner = (page) => {
    let banner;
    switch (page) {
      case 'index':
        banner = 'https://source.unsplash.com/random/1040x400'
        break;
      case 'about-us':
        banner = 'https://source.unsplash.com/random/1040x400'
        break;
      case 'community-blog':
        banner = 'https://source.unsplash.com/random/1040x400'
        break;
      case 'contact-us':
        banner = 'https://source.unsplash.com/random/1040x400'
        break;
      default:
        break;
    }
    return banner;
  }

  return (
    <div className={styles.container}>
      <img src={setBanner(page)} 
        className={styles.banner}
      />
      <div className={styles.banner_bar} />
      <nav className={styles.nav_wrapper}>
        <img src="https://source.unsplash.com/random/200x100" 
          className={styles.logo}
        />
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
          <img src="https://simpleicons.org/icons/adobephonegap.svg" 
            className={styles.icon}
          />
          {data.site.siteMetadata.phone}
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
