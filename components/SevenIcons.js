import React from 'react'
import styles from './SevenIcons.module.scss'

import Image from 'next/image'
const SevenIcons = () => {
  return (

    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.innerContainer}`}>

        <div className={`${styles.iconContainer}`}>
          <Image src={'/images/jet.png'} height={50} width={50} />
          <label className={`${styles.label}`}>دیجی کالا جت</label>
        </div>

        <div className={`${styles.iconContainer}`}>
          <Image src={'/images/haraj.png'} height={60} width={60} />
          <label className={`${styles.label}`}>حراج استایل</label>
        </div>

        <div className={`${styles.iconContainer}`}>
          <Image src={'/images/aghsat.png'} height={50} width={50} />
          <label className={`${styles.label}`}>اقساط</label>
        </div>

        <div className={`${styles.iconContainer}`}>
          <Image src={'/images/omde.png'} height={50} width={50} />
          <label className={`${styles.label}`}>فروش عمده</label>
        </div>

        <div className={`${styles.iconContainer}`}>
          <Image src={'/images/pishnahadRoozMobile.png'} height={50} width={50} />
          <label className={`${styles.label}`}>پیشنهاد روز موبایل</label>
        </div>

        <div className={`${styles.iconContainer}`}>
          <Image src={'/images/jameJahani.png'} height={50} width={50} />
          <label className={`${styles.label}`}>جام جهانی</label>
        </div>

        <div className={`${styles.iconContainer}`}>
          <Image src={'/images/sareMah.png'} height={50} width={50} />
          <label className={`${styles.label}`}>خرید سر ماه</label>
        </div>
      </div>
    </div>
  )
}

export default SevenIcons