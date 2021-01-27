import React from "react"
import { Link } from "gatsby"

function NavItem(props){
    return(
        <li className="nav-item">
            <Link to={props.url} className="nav-link" activeClassName="active">{props.children}</Link>
        </li>
    )
}

export default NavItem