import React from 'react'
import Contact from "../contact/contact.js"
import "./footer.scss"

const Footer = () => (
  <footer>
    <Contact/>
    <div className="container">
      <p>© {new Date().getFullYear()}, Raphael Bourassa. Tous droits réservés.</p>
    </div>
  </footer>
)

export default Footer
