import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './404.module.scss'
const NotFound = () => {
    return (
        <div className={`${styles.mainContainer}`}>
            <Image className={`${styles.incredibleOfferImage}`} src='/images/notFound.png' width={600} height={450} />
            <h1  className={`${styles.notFoundText}`}>صفحه مورد نظر یافت نشد</h1>
            <Link href="/">
                <div className={`${styles.button}`}>
بازگشت به صفحه اصلی فروشگاه                </div>
            </Link>

        </div>
    )
}

export default NotFound