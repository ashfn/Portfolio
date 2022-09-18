import React from 'react'
import Head from 'next/head'

import Nav from '../components/Nav'

const Layout = () => {

//          

  return (
    <div>
        <Head>
          <title>Authorises Portfolio</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
          <meta name="description" content="Hello! I'm Authorises, I love developing backend services and websites. I also have alot of experience creating Mineceraft plugins and servers."></meta>
        </Head>
      <Nav/>
    </div>
  )
}

export default Layout