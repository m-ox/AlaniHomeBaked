import { useState } from 'react'
import Layout from '../components/layout.js'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Hero from '../components/herosection'
import Twosome from '../components/twosome'

import Cookies from '../images/cookies.png'
import Cakes from '../images/cakes.png'
import Candles from '../images/candles.png'
import Earrings from '../images/earrings.png'
import Plants from '../images/plants.png'
import HeroImage from '../images/hero.png'

import styles from '../styles/Home.module.scss'

export default function Home() {
  const [title, setTitle] = useState(<h1>Happy Mother's Day</h1>)
  const [summary, setSummary] = useState(
    <>
      <h6>Mother's Day Specials</h6>
      <span className={styles.item}>
        <p>4-inch Cake, $30:</p>
        <p>Lemon cake with a bouquet of lemon buttercream (pictured).</p>
      </span>
      <span className={styles.item}>
        <p>Cupcakes, $5 each:</p>
        <p>Vanilla or chocolate cupcake with a bouquet of vanilla buttercream.</p>
      </span>
      <span className={styles.item}>
        <p>Floral Wreath, $60:</p>
        <p>Handmade with care, a selection of synthetic springtime flowers.</p>
      </span>
      <p>Ask me about other personalized gifts!</p>
    </>
  )

  
  return (
    <div className={styles.container}>

      <Layout>
        <Head>
          <title>Alani Bakery and Gifts</title>
          <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="main">

            <Hero
              img={<Image layout="fill" objectFit="cover" src={HeroImage}/>}
              title={title}
              summary={summary}
            />

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
