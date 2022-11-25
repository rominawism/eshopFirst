import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as api from '../api/Adaptor'
import styles from "./TopBanner.module.scss"


const TopBanner = () => {
    const [banner, setBanner] = useState({})

    useEffect(() => {
        api.GET("topBanner").then(res => setBanner(res.data)).catch(err => console.log(err))
    }, [])

    return (
        <div className={`${styles.mainContainer}`}>
         <Link href={`${banner.url}`}>
            <Image alt="top banner" src={banner.imageUrl} layout="fill" className={`${styles.image}`} />
            </Link>
        </div>
    )
}

export default TopBanner