import React from 'react'
import Layout from '../components/layout.js'
import Head from 'next/head'

import styles from '../styles/Goods.module.scss'

export default function HomeDecor() {
  return (
    <div className="container">

      <Layout>
        <Head>
          <title>MHome Decor</title>
          <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>

        <div className="main">MHome Decor content</div>

      </Layout>
      
    </div>
  )
}
