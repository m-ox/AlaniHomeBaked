import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout( { children }) {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />

      {children}

      <Footer />
    </div>
  )
}
