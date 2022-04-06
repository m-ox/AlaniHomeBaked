import React from 'react'
import Layout from '../../components/layout'
import Head from 'next/head'

import styles from '../../styles/Goods.module.scss'
export default function Macarons() {
  return (
    <div className="container">

      <Layout>
        <Head>
          <title>Macarons</title>
          <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>

        <div className="main">Macarons content</div>

      </Layout>
      
    </div>
  )
}
