import styles from '../styles/Home.module.scss'
import Head from 'next/head'

import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout( { children }) {
  return (
    <>
        <Head>
        {/* FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Rock+Salt&display=swap" rel="stylesheet"/>

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
        </Head>
        
        <div className={styles.container}>
            <Header />
            <Navbar />

            <div className={styles.maincontent}>
                {children}
            </div>

            <Footer />
        </div>
    </>
  )
}
