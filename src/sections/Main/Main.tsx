import React, {FC} from 'react'
import style from "./main.module.scss"

import SocialIcons from '@/components/Main/SocialIcons/SocialIcons'
import Email from '@/components/Main/Email/Email'
import Hero from '@/components/Main/Hero/Hero'
import About from '@/components/Main/About/About'
import Experience from '@/components/Main/Experience/Experience'

const Main: FC = () => {
  return (
    <div>
        <SocialIcons />
        <Email />
        <Hero />
        <About />
        <Experience />
        {/* добавить раздел - код которым я горжусь */}
    </div>
  )
}

export default Main