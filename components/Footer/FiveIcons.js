import React from 'react'
import styles from './FiveIcons.module.scss'

import Image from 'next/image'
const FiveIcons = () => {
  return (
    <div className={`${styles.mainContainer}`}>
     
      <div className={`${styles.iconContainer}`}>
        <Image src={'/images/cashOnDelivery.svg'} height={80} width={80} />
        <label>پرداخت در محل</label>
      </div>

      <div className={`${styles.iconContainer}`}>
        <Image src={'/images/daysReturn.svg'} height={80} width={80} />
        <label>۷ روز ضمانت بارگشت وجه</label>
      </div>

      <div className={`${styles.iconContainer}`}>
        <Image src={'/images/expressDelivery.svg'} height={80} width={80} />
        <label>امکان تحویل اکسپرس</label>
      </div>

      <div className={`${styles.iconContainer}`}>
        <Image src={'/images/originalProducts.svg'} height={80} width={80} />
        <label>ضمانت اصل بودن کالا</label>
      </div>

      <div className={`${styles.iconContainer}`}>
        <Image src={'/images/support.svg'} height={80} width={80} />
        <label>پشتیبانی ۲۴ ساعته</label>
      </div>
    </div>
  )
}

export default FiveIcons