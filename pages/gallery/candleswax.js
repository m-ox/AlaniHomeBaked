import React from 'react'
import Layout from '../../components/layout'
import Head from 'next/head'

import styles from '../../styles/Goods.module.scss'

export default function Candles() {
  return (
    <div className="container">

      <Layout>
        <Head>
          <title>Candles and Wax Melts</title>
          <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>

        <div className="main">Candles and Wax Melts content</div>

      </Layout>
      
    </div>
  )
}
