import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu/menu"

const Header = ({ siteTitle, menuItems }) => (
  <header>
    <Menu siteTitle={siteTitle} menuItems={menuItems} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
