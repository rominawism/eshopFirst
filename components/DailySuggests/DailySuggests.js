import React, { useEffect, useState } from 'react'
import * as api from '../../api/Adaptor'
import DailySuggestCard from './DailySuggestCard'
import styles from './DailySuggests.module.scss'
const DailySuggests = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
      api.GET("products/dailySuggests").then(res => setProducts(res.data)).catch(err => console.log(err))
  }, [])

  return (
    <div className={`${styles.mainContainer}`}>
    {
      products.map(item=>{
        return <DailySuggestCard data={item}/>
      })
    }
    </div>
  )
}

export default DailySuggests