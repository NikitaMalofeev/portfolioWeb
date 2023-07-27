import React, {FC} from 'react'

import style from "./header.module.scss"
import NavBar from '@/components/Header/NavBar/NavBar'
import Burger from '@/components/Header/Burger/Burger'
import Head from 'next/head'


const Header: FC = () => {
  return (
    <div className={style.header__wrapper}>
      <Head>
        <title>Nikita Malofeev</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </div>
  )
}

export default Header