import React, { useEffect, useState } from 'react'
import Carusel from '../components/Carusel'
import * as api from '../api/Adaptor'
import styles from './AllCategories.module.scss'
import Link from 'next/link'


const AllCategories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        api.GET("products/categories").then(res => setCategories(res.data)).catch(err => console.log(err))
    }, [])


    return (
        <div className={`${styles.mainContainer}`}>

            {
                categories.map(item => {
                    return <>
                      <hr/>
                        <h3>{item.name}</h3>
                        <Carusel data={item.products} cardsCount={6} />
                        <div  className={`${styles.showAllContainer}`}>
                        <Link  href = {`/products/category/${item.name}`} > 
                        ...مشاهده همه
                        </Link>
                        </div>
                    </>
                })
            }
        </div>
    )
}

export default AllCategories
