import React from 'react'
import Layout from '../components/layout.js'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Twosome from '../components/twosome'

export default function Home() {
  return (
    <div className={styles.container}>

      <Layout>
        <Head>
          <title>Alani Bakery and Gifts</title>
          <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="main">
            <h1>Our Top Selling Baked Goods</h1>
            <h6>Treat yourself and loved ones!</h6>

            {/* TODO: 2:1 image feature component */}
            <Twosome
              first={{product: 'cake', summary: 'delicious cake', image: '/images/cakes.png'}}
              second={{product: 'cookies', summary: 'delicious cookies', image: '/images/cookies.png'}}
            />

            <h1>Our Top Selling Gifts</h1>
            <h6>Gift yourself and others!</h6>

            {/* TODO: 3:1 image feature component */}
            jewelry, candles, and home decor
        </div>

      </Layout>
      
    </div>
  )
}
