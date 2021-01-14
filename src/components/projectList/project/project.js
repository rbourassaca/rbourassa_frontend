import React from "react"
import Img from "gatsby-image"
import { Row, Col } from "react-bootstrap"

import "./project.scss"

const Project = ({ project, index, archive, defaultThumbnail }) => {
    return(
        <div className="project" key={index}>
            <Row>
                <Col lg={8} className="info">
                    <div>
                        <h2>{project.title}</h2>
                        <p>{project["acf_"+archive].description.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 400)+"..."}</p>
                    </div>
                </Col>
                <Col>
                    {project.featuredImage !== null
                        ? <Img fluid={project.featuredImage.node.localFile.childImageSharp.fluid}/>
                        : <Img fluid={defaultThumbnail.childImageSharp.fluid}/>
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Project