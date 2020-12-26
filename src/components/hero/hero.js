import React from "react"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"

import "./hero.scss"

var background;

const Hero = (props) =>{
    if(typeof(props.background) === "object"){
        background = props.background[Math.floor((Math.random() * props.background.length))].node.childImageSharp.fluid
    }
    console.log(background);
    return(
        <section className="hero">
            <Img fluid={background} className="background"/>
            <Container>
                {props.logo &&
                    <Img fluid={props.logo} alt="Logo du site web" className="logo"/>
                }
                {props.title &&
                    <h1 className="page-title">{props.title}</h1>
                }
                {props.subtitle &&
                    <h2 className="page-subtitle">{props.subtitle}</h2>
                }
            </Container>
        </section>
    )
}

export default Hero;