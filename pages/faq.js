import React from 'react'
import Layout from '../components/layout.js'
import Head from 'next/head'
import {Container, Typography, Grid} from '@mui/material'

import styles from '../styles/Faq.module.scss'

export default function FAQ() {
  return (
    <Grid container className="container">

      <Layout>
        <Head>
          <title>FAQ</title>
          <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>

        <Grid container spacing={0} className={styles.main}>
            
                <header>
                    <Typography variant="h4" component="h1">
                        FAQ
                    </Typography>
                    <Typography variant="h6" component="h5">
                        Useful Information
                    </Typography>
                </header>

                <Grid container spacing={2} justify="center">
                    <ul>
                        <li>
                            <h3>Do you offer gluten free items?</h3>
                            <p>Many of our baked goods can be made with gluten free alternatives! However, it is important to note that flour can remain airborne for hours after it is used and therefore fall on surfaces that have already been cleaned. The work area is cleaned very thoroughly each business day, but it cannot be guaranteed that any allergen is completely eliminated from any product.</p>
                        </li>
                        <li>
                            <h3>Do you make any vegan items?</h3>
                            <p>Yes, both vegan and even keto friendly items can be custom ordered! Please feel free to reach out regarding alternative dietary options with any of our products.</p>
                        </li>
                        <li>
                            <h3>How do I keep my purchases fresh?</h3>
                            <p>All items are made fresh, and customers can freeze almost any item to be thawed within a few hours of enjoyment. Refrigeration is not recommended as it tends to dry out most flour-based goods. Keep items covered and stored on the counter, in a pantry, or in a cupboard, unless otherwise specified. Enjoy items within 3-5 days of purchasing.</p>
                        </li>
                        <li>
                            <h3>What kind of food coloring do you use?</h3>
                            <p>Artificial food coloring is used primarily, and natural food coloring can be used upon request. Please note that natural food coloring has limitations in vibrancy. The color will change or be completely lost if baked into batter, so it is best used in frosting or fondant. Requesting dark or vibrant colors may incur additional charges depending on the request.</p>
                        </li>
                        <li>
                            <h3>What are your credentials?</h3>
                            <p>I have professional experience working as a baker in 2016 and have catered for private events since then. I am mostly self-taught, using in-house experimentation, collaborative catering ev

                                
                            ents, and baked goods relevant media as my primary sources of continued learning.<br/>
                            
                            My items are made in my home kitchen and are recognized as "cottage foods" in the state of Idaho. This means that my food items are "shelf-stable," my kitchen is not subject to regulatory inspections, and I cannot guarantee that any item is 100% allergen-free.<br/>
                            
                            I am a registered LLC through the state of Idaho, and I have my Associate of Science in Business Administration obtained from North Idaho College.</p>
                        </li>
                    </ul>
                </Grid>            
        </Grid>

      </Layout>
      
    </Grid>
  )
}
