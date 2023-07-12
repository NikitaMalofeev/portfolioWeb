import React, {FC} from 'react'
import style from "./main.module.scss"

import SocialIcons from '@/components/Main/SocialIcons/SocialIcons'
import Email from '@/components/Main/Email/Email'
import Hero from '@/components/Main/Hero/Hero'

const Main: FC = () => {
  return (
    <div>
        <SocialIcons />
        <Email />
        <Hero />
    </div>
  )
}

export default Main