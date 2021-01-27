import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const NavBrand = (props) => {
    const logo = useStaticQuery(graphql`
        query{
            file(relativePath: { eq: "logo.png" }){
                childImageSharp{
                    fixed(width: 55){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return(
        <Link to={props.url} className="navbar-brand">
            <Img fixed={logo.file.childImageSharp.fixed}/>
        </Link>
    )
}

export default NavBrand