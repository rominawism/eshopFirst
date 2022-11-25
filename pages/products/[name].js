import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import * as fetchApi from '../../api/FetchApiAdaptor'
import Header from '../../components/Header'
import styles from './name.module.scss'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import Footer from '../../components/Footer/Footer'
import OutOfStockButton from '../../components/buttons/OutOfStockButton'
import AddToShoppingCartButton from '../../components/buttons/AddToShoppingCartButton'


const singleProduct = (props) => {
 
    return <div className={`${styles.mainContainer}`}>
      <div className={`${styles.contentContainer}`}>

        <div className={`${styles.rightContentContainer}`}>
          <div className={`${styles.slidesContainer}`}>
            <ReactImageGallery
              key={props.product.images.id}
              id={props.product.images.id}
              autoPlay={false}
              showPlayButton={false}
              showFullscreenButton={false}
              items={props.product.images}
              isRTL={true}
              lazyLoad={true}
              slideInterval={3000}
              onClick={(e) => {
                alert(e.target);
              }}
            />
          </div>
        </div>

        <div className={`${styles.leftContentContainer}`}>
          <h3>{props.product.name}</h3>
          <hr />
          <p align="justify" className={`${styles.description}`}>{props.product.description}</p>
        </div>
      </div>


      <div className={`${styles.bottomContainer}`}>
        
        {props.product.priceWithDiscount === 0 ? (
        <div >
          {props.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
        </div>
      ) : (
        <div className={`${styles.priceDetail}`}>
          <div className={`${styles.priceContainer}`}>
            <div className={`${styles.priceBeforeOff}`}>
              {props.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
            <div>
              {props.product.priceWithDiscount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              تومان
            </div>
          </div>
          <label className={`${styles.offPrcent}`}>
            {Math.floor(
              ((props.product.price - props.product.priceWithDiscount) / props.product.price) * 100
            )}
            %
          </label>

        </div>

      )}
        <div>
          {
            props.product.stock === 0 ? <OutOfStockButton /> : (<AddToShoppingCartButton />)
          }
        </div>
      </div>

    </div>

}


export async function getStaticProps(context) {
  const productRequest = await fetchApi.GET(`products/name/${context.params.name}`);
  const product = await productRequest.json();
  // console.log(product)
  return {
    props: { product },
    revalidate: 15
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export default singleProduct