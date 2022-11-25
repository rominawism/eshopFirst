import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddToShoppingCartButton from './buttons/AddToShoppingCartButton'
import OutOfStockButton from './buttons/OutOfStockButton'
import styles from './Card.module.scss'

const Card = ({product}) => {
  return (
    <div className={styles.mainContainer}>
      <Link href={`/products/${product.name}`}>
     
     {
        product.incredibleOffers===true ? <Image className={`${styles.incredibleOfferImage}`} alt={product.name} src='/images/IncredibleOffer.svg' width={200} height={15} /> : null
}
        <p align="justify" className={`${styles.productName}`}> {product.name.substring(0, 25)}{product.name.length > 25 ? "..." : null}</p>
        <Image alt={product.name} src={product.indexImageUrl} width={200} height={200} />
        
        {product.priceWithDiscount === 0 ? (
          <div className={`${styles.priceContainer}`}>
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
          </div>
        ) : (
          <div className={`${styles.priceDetail}`}>
            <div className={`${styles.priceContainer}`}>
              <div className={`${styles.priceBeforeOff}`}>
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </div>
              <div>
                {product.priceWithDiscount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </div>
            </div>
            <label className={`${styles.offPrcent}`}>
              {Math.floor(
                ((product.price - product.priceWithDiscount) / product.price) * 100
              )}
              %
            </label>

          </div>

        )}
      </Link>
      {
        product.stock === 0 ? <OutOfStockButton /> : (<AddToShoppingCartButton />)
      }
    </div>
  )
}

export default Card