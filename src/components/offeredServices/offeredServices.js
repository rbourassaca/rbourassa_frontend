import React from "react"
import Img from "gatsby-image"
import { Container, Row } from "react-bootstrap"

import "./offeredServices.scss"

const OfferedServices = ({services}) => {
    return(
        <section className="offeredServices">
            <Container>
                <h2>Services offerts</h2>
                <Row>
                    {services.map((service, index) => 
                        <figure key={index} className={"col-lg-"+12/services.length}>
                            <Img fixed={service.icone.localFile.childImageSharp.fixed}/>
                            <figcaption>
                                <p>{service.pour}</p>
                                <ul>
                                    {service.sousServices.map((sousService, index) =>
                                        <li key={index}>{sousService.nom}</li>
                                        )}
                                </ul>
                            </figcaption>
                        </figure>
                    )}
                </Row>
            </Container>         
        </section>
    )
}

export default OfferedServices