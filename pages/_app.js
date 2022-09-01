import '../styles/globals.css'
import Layout from '../comps/Layout'
import Head from 'next/head'
import React from 'react'
export const myContext = React.createContext()

function MyApp({ Component, pageProps }) {

  const [checkInDate, setCheckInDate] = React.useState("")
  const [checkOutDate, setCheckOutDate] = React.useState("")
  const [daysNumber, setDaysNumber] = React.useState()
  const x = {checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, daysNumber, setDaysNumber}

  return (
    <myContext.Provider value={x}>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
      
    </myContext.Provider>
  )
}

export default MyApp
