import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/programmes', name: 'Programmes' },
  { path: '/PrivacyPolicy', name: 'Save Life' },
  { path: '/Media', name: 'Explore Campingns' },
  { path: '/ChildProtection', name: 'Public Health And Nutrition' },
  { path: '/donate/:id', name: 'Monthly Donation' },
  { path: '/Clinic', name: 'Our Clinics' },
  { path: '/GetInvolved', name: 'Get Involved' },
  { path: '/Contact', name: 'Contact Us' },
]

const Navbar = ({ containerStyles, linkStyles, underLineStyles }) => {
  const location = useLocation()
  
  return (
    <div className={`${containerStyles} `}>
      {links.map((link, index) => {
        const isActive = location.pathname === link.path || location.pathname.startsWith(link.path.replace(':id', ''));
        
        return (
          <a href={link.path} className={`${linkStyles} capitalize line-clamp-2 w-full`} key={index}>
            {isActive && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underLineStyles}`}
              />
            )}
            {link.name}
          </a>
        )
      })}
    </div>
  )
}

export default Navbar
