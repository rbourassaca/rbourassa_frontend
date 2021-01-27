import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'

import "./hero.scss"



const Hero = (props) =>{
    var social = [];

    const query = useStaticQuery(graphql `
        query MyQuery {
            wp{
                heroSettings{
                    reseauxSociaux{
                        liens{
                            reseau
                            lien
                        }
                    }
                }
            }
        }
    `)

    query.wp.heroSettings.reseauxSociaux.liens.map((item, index) => {
        switch(item.reseau){
            case "Facebook":
                social.push({"link" : item.lien, "icon" : faFacebookF});
                break;
            case "Instagram":
                social.push({"link" : item.lien, "icon" : faInstagram});
                break;
            case "LinkedIn":
                social.push({"link" : item.lien, "icon" : faLinkedin});
                break;
            case "Youtube":
                social.push({"link" : item.lien, "icon" : faYoutube});
                break;
            case "GitHub":
                social.push({"link" : item.lien, "icon" : faGithub});
                break;
            default:
                social.push({"link" : item.lien, "icon" : faGlobe});
                break;
        }
        return null;
    })

    return(
        <section className="hero">
            <Img fluid={props.background} className="background"/>
            <aside>
                <ul>
                    {social.map((item, index) =>
                    <li key={index}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={item.icon}/>
                        </a>
                    </li>
                    )}
                </ul>
            </aside>
            <Container>
                {props.logo &&
                    <Img fluid={props.logo} alt="Logo du site web" className="logo"/>
                }
            </Container>
            <div className="inner">
                <Container>
                    {props.title &&
                        <h1 className="page-title">{props.title}</h1>
                    }
                    {props.subtitle &&
                        <h2 className="page-subtitle">{props.subtitle}</h2>
                    }
                </Container>
            </div>
            <FontAwesomeIcon icon={faArrowDown} />
        </section>
    )
}

export default Hero;