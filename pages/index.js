import React from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alani Bakery and Gifts</title>
        <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div>
        main page content
      </div>

      <Footer />
    </div>
  )
}
