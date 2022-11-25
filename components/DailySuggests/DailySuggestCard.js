import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './DailySuggestCard.module.scss'

const DailySuggestCard = (props) => {
  const { data } = props

  return (
    <div className={`${styles.mainContainer}`} >
         <Link href={`/products/${data.id}`}>
      <Image alt={data.name} src={data.indexImageUrl} width={200} height={200} />
      {data.priceWithDiscount === 0 ? (
          <div className={`${styles.priceContainer}`}>
            {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان  
          </div>
        ) : (
          <div className={`${styles.priceDetail}`}>
            <div className={`${styles.priceContainer}`}>
              <div className={`${styles.priceBeforeOff}`}>
                {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </div>
              <div>
                {data.priceWithDiscount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </div>
            </div>
            <label className={`${styles.offPrcent}`}>
              {Math.floor(
                ((data.price - data.priceWithDiscount) / data.price) * 100
              )}
              %
            </label>
          </div>
        )}
</Link>
    </div>
  )

}

export default DailySuggestCard