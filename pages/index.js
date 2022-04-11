import React from 'react'
import Layout from '../components/layout.js'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Twosome from '../components/twosome'

import Cookies from '../images/cookies.png'
import Cakes from '../images/cakes.png'
import Candles from '../images/candles.png'
import Earrings from '../images/earrings.png'
import Plants from '../images/plants.png'

import styles from '../styles/Home.module.scss'

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

            {/* Hero Section */}

            <div className={styles.texty}>
              <h1>Our Top Selling Baked Goods</h1>
              <h6>Treat yourself and loved ones!</h6>
            </div>

            <Twosome
              first={<Image layout="fill" objectFit="cover" src={Cookies}/>}
              firstlabel={<div><p>Cookies</p> <Link href="/featured/cookies">Learn More</Link></div>}
              second={<Image layout="fill" objectFit="cover" src={Cakes}/>}
              secondlabel={<div><p>Cakes</p> <Link href="/featured/cakes">Learn More</Link></div>}
            />

            <div className={styles.texty}>
              <h1>Our Top Selling Gifts</h1>
              <h6>Gift yourself and others!</h6>
            </div>

            <Twosome
              first={<Image layout="fill" objectFit="cover" src={Earrings}/>}
              firstlabel={<div><p>Earrings</p> <Link href="/featured/jewelry">Learn More</Link></div>}
              second={<Image layout="fill" objectFit="cover" src={Candles}/>}
              secondlabel={<div><p>Candles & Wax Melts</p> <Link href="/featured/candleswax">Learn More</Link></div>}
              third={<Image layout="fill" objectFit="cover" src={Plants}/>}
              thirdlabel={<div><p>Home Decor</p> <Link href="/featured/homedecor">Learn More</Link></div>}
            />

            {/* Always open weird ending box */}
            
        </div>

      </Layout>
      
    </div>
  )
}
