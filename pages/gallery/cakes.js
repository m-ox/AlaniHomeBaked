import React from 'react'
import Layout from '../components/layout.js'
import Head from 'next/head'

import styles from '../styles/Goods.module.scss'

export default function Cake() {
  return (
    <div className="container">

      <Layout>
        <Head>
          <title>Cake</title>
          <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>

        <div className="main">Cake content</div>

      </Layout>
      
    </div>
  )
}
