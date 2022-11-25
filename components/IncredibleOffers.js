import React, { useEffect, useState } from 'react'
import Carusel from '../components/Carusel'
import * as api from '../api/Adaptor'
import Image from 'next/image'
import styles from "./IncredibleOffers.module.scss"


const IncredibleOffers = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        api.GET("products/incredibleOffers").then(res => setProducts(res.data)).catch(err => console.log(err))
    }, [])

    return (
        <div className={`${styles.mainContainer}`}>
            <div className={`${styles.rightContainer}`}>
            <Image src='/images/amazingTypo.png' width={100} height={100} />
            <Image src='/images/box.png' width={100} height={100} />
            </div>
            <div className={`${styles.caruselContainer}`}>
                <Carusel data={products} cardsCount={3}/>
            </div>
        </div>
    )
}

export default IncredibleOffers