import React from 'react'
import logo from "../assets/assets/logo.png"
import { SOCIAL_MEDIA_LINKS } from '../assets/constants'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <div className='mb-8 mt-20'>
      {/* <div className='flex items-center justify-center'>
        <motion.img 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5}}
        // The transition from opacity: 0 to opacity: 1 takes 0.5 
        src={logo} width={200} className='my-20'/>
      </div> */}
       <div className='flex items-center justify-center gap-8'>
        {SOCIAL_MEDIA_LINKS.map((link,index)=>(
          <motion.a 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.2,delay:index*0.5}}
          key={index} href={link.href} target="_blank" rel="noopener onreferrer">
            {link.icon}
          </motion.a>
        ))}
       </div>
       <p className='mt-8 text-center text-sm tracking-wide texy-gray-400 '>
        &copy; All rights resersved.
       </p>
    </div>
  )
}

export default Footer