import React from 'react'
import Layout from '../components/layout.js'
import Head from 'next/head'

import styles from '../styles/Faq.module.scss'

export default function FAQ() {
  return (
    <div className="container">

      <Layout>
        <Head>
          <title>FAQ</title>
          <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>

        <div className="main">FAQ content</div>

      </Layout>
      
    </div>
  )
}
