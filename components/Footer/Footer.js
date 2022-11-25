import Image from 'next/image'
import React from 'react'

import styles from "./Footer.module.scss"
import FiveIcons from './FiveIcons'
import DownloadApplications from '../DownloadApplications'
const Footer = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <Image src='/images/logoFarsi.svg' width={100} height={40}/>
      <h5>تلفن پشتیبانی ۲۲۲۲۲۲۲۲ - ۰۲۱ | ۷ روز هفته  ۲۴ ساعته پاسخگوی شما هستیم</h5>
      <FiveIcons/>
      <DownloadApplications/>
    </div>
  )
}

export default Footer