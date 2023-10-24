import React, { memo } from 'react'

const Footer = memo(() => {
  return (
    <footer className="footer">
        <p className="text-sm">
        Copyright © 2021
        <a className="text-primary-500 ml-2 hover:underline" href="#" target="_blank">
            Armel Wanes
        </a>
        </p>
    </footer>
  )
})
export default Footer;