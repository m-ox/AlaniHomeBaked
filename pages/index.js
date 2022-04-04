import React from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alani Bakery and Gifts</title>
        <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
        <link rel="icon" href="/favicon.ico" />

        {/* FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Rock+Salt&display=swap" rel="stylesheet"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
        
      </Head>

      <Header />
      <Navbar />

      <div>
        main page content
      </div>

      <Footer />
    </div>
  )
}
