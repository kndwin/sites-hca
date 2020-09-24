import React from "react"
import Layout from "../components/layout.js"
import styles from "./index.module.scss"
import Card from "../components/card.js"
import Profile from "../components/profile.js"

export default function Home() {
  const cards = [
    {
      title: 'card one',
      date: '14-08-2020',
      image: 'https://source.unsplash.com/random/200x150',
      alt: 'alternate 1'
    },
    {
      title: 'card two',
      date: '19-08-2020',
      image: 'https://source.unsplash.com/random/200x150',
      alt: 'alternate 2'
    },
    {
      title: 'card three',
      date: '23-08-2020',
      image: 'https://source.unsplash.com/random/200x150',
      alt: 'alternate 3'
    },
  ]

  const services = [
    {
      title: 'Financial Aid',
      date: '14-08-2020',
      image: 'https://source.unsplash.com/random/200x150',
      alt: 'alternate 1'
    },
    {
      title: 'Opportunity Shop',
      date: '19-08-2020',
      image: 'https://source.unsplash.com/random/200x150',
      alt: 'alternate 2'
    },
  ]

  return  (
    <Layout page="index">
      <div className={styles.title_overlay}>
        <h1>We are here to help</h1>
        <p>Having served our people for over 50 years, 
          the Holroyd Community Aid has always been for the people
        </p>
      </div>
      <div className={styles.card_container}>
        <div className={styles.cards}>
          {cards
            .map((card) => 
              <Card
                title={card.title}
                date={card.date}
                image={card.image}
                alt={card.alt}
              />
          )}
        </div>
      </div>
      <h2>Services</h2>
      <div className={styles.service_container}>
        <div className={styles.services}>
          {services
            .map((profile) => 
              <Profile
                title={profile.title}
                date={profile.date}
                image={profile.image}
                alt={profile.alt}
              />
          )}
        </div>
      </div>
      <div className={styles.image_container}>
        <img src="https://source.unsplash.com/random/200x200" 
          alt="image" 
          className={styles.image_center}
        />
      <h2>Proudly serving the community</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "image/undraw_fill_forms_yltj.svg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
