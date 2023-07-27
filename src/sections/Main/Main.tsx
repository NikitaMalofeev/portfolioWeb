import React, {FC} from 'react'

import SocialIcons from '@/components/Main/SocialIcons/SocialIcons'
import Email from '@/components/Main/Email/Email'
import Hero from '@/components/Main/Hero/Hero'
import About from '@/components/Main/About/About'
import Experience from '@/components/Main/Experience/Experience'
import Projects from '@/components/Main/Projects/Projects'
import OtherProjects from '@/components/Main/OtherProjecs/OtherProjects'
import Contact from '@/components/Main/Contact/Contact'

import style from "./main.module.scss"


const Main: FC = () => {
  return (
    <div>
        <SocialIcons />
        <Email />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OtherProjects />
        <Contact />
    </div>
  )
}

export default Main