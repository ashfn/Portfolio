import React from 'react'
import Head from 'next/head'

import Nav from '../components/Nav'

const Layout = () => {
  return (
    <div>
        <Head>
        <title>Authorises Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8"/>
      </Head>
      <Nav/>
    </div>
  )
}

export default Layout