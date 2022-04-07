import React from 'react'
import Layout from '../components/layout.js'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <div className="container">

      <Layout>
        <Head>
          <title>About Us</title>
          <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>

        <div className="main">
            <h2>Our Story</h2>

            <p>My name is Taysia Alani Matthias, and I am very pleased to meet you!<br/>
            I have been making things for as long as I can remember - I think my mother started teaching me as soon as I could understand. It has always been a side hustle; but after being a stay-at-home mom for about a year, I finally kicked off my official business in the spring of 2021! I couldn't be more excited to share this experience with all of my family and friends who have supported me from the start!<br/>
            My business name comes from my middle name, Alani, which is Hawaiian for "orange" or "orange tree," which happens to be my favorite flavor and scent, and which also happens to be my fiancé's favorite color. I am incredibly grateful for the undying support of my fiancé, Douglas, who has been working tirelessly to allow me to stay home with our son, Braven, and to also allow me to work on my dreams of owning a bakery/giftshop.<br/>
            We are online only for now until we are able to open up a physical shop. My home bakery is located in Athol, ID, we offer delivery to Coeur d'Alene, Sandpoint, Spokane, the Silver Valley, and the surrounding areas, and can ship some items to anywhere in the US. We accept CashApp, Venmo, PayPal, Google Pay, and Facebook Pay.</p>

           <Link href="/contact">
               <a>Get In Touch</a>
           </Link> 
        </div>

      </Layout>
      
    </div>
  )
}
