import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header'
import TopBanner from '../TopBanner'
import styles from './Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={`${styles.mainContainer}`}>
      <TopBanner/>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout