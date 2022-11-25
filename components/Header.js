import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import SearchBox from './SearchBox'
import { BsPerson } from "react-icons/bs";
import { GrCart }  from "react-icons/gr";
import Link from 'next/link';


const Header = () => {
    return (
        <div className={`${styles.mainContainer}`}>
            <div className={`${styles.rightContainer}`}>

                <div className={`${styles.logoContainer}`}>
                   <Link href="/">
                    <Image className={`${styles.logoContainer}`} alt="فروشگاه اینترنتی من" src='/images/logoFarsi.svg' width={200} height={50} />
                    </Link>
                </div>

                <div className={`${styles.searchContainer}`}>
                    <SearchBox/>
                </div>

            </div>
            <div className={`${styles.leftContainer}`}>
                <div className={`${styles.cartContainer}`}>
                <GrCart
                size="1.6em"
                className={`${styles.cartButtonIcon} `}
              />
                </div>

                <div className={`${styles.loginContainer}`}>
                <BsPerson
                size="1.8em"
                className={`${styles.loginRegisterButtonIcon} `}
              />
                </div>
            </div>
        </div>
    )
}

export default Header