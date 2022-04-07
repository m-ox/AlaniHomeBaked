import {useState} from 'react'
import Layout from '../components/layout.js'
import Head from 'next/head'

import Form from '../components/contact/form'
import FormSuccess from '../components/contact/formsuccess'

import styles from '../styles/Contact.module.scss'

export default function Contact() {

    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

  return (
    <div className="container">

      <Layout>
        <Head>
          <title>Contact Us</title>
          <meta name="description" content="Alani's baked goods and homemade gifts! Local to the Coeur d'Alene community." />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>

        <div className="main">

            <div className={styles.form}>
                {!isSubmitted ?
                        (<Form
                            submitForm={submitForm}
                            msg={''}
                            children={
                                <div className={styles.hero}>
                                    <h1>Contact Us</h1>
                                    <p>Online only</p>
                                    <p>taysia@alanibakery.com</p>
                                    <p>(208) 500-8193</p>
                                </div>
                            }
                            />)
                            :
                        (<FormSuccess />)
                    }
            </div>

        </div>

      </Layout>
      
    </div>
  )
}
