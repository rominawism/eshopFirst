import Image from 'next/image'
import React from 'react'
import styles from './DownloadApplications.module.scss'

const DownloadApplications = () => {
    return (
        <div className={`${styles.mainContainer}`}>

            <div className={`${styles.rightContainer}`} >
                <Image src='/images/footerlogo2.png' height={50} width={50} />
                <label className={`${styles.text}`}>دانلود اپلیکیشن دیجی‌کالا</label>
            </div>

            <div className={`${styles.leftContainer}`} >
            <a href='https://myket.ir/app/com.digikala'>   <Image className={`${styles.button}`} src='/images/myketButton.svg' width={125} height={40} /></a>
            <a href='https://sibapp.com/applications/digikala'>   <Image className={`${styles.button}`} src='/images/sibAppButton.svg' width={125} height={40} /></a>
            
            <a href='https://play.google.com/store/apps/details?id=com.digikala.diagon&hl=en&gl=US&pli=1'>    <Image className={`${styles.button}`} src='/images/googlePlayButton.svg' width={125} height={40} /></a>
            
           <a href="https://cafebazaar.ir/app/com.digikala"> <Image className={`${styles.button}`} src='/images/bazzarButton.svg' width={125} height={40} /></a> 
            </div>
        </div>
    )
}

export default DownloadApplications