import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Embed from "./embed/embed.js"
import Info from "./info/info.js"
import ProjectImage from "./projectImage/projectImage.js"
import Masonry from 'react-masonry-css'
import "./masonry.scss"

const ProjectInfo = ({project}) => {
    const projectAcf = project["acf_"+project.contentType.node.name]
    var embed = null
    var info = {}
    var description = {__html: projectAcf.description}
    var images = projectAcf.photos

    switch(project.contentType.node.name){
        case "audio":
            embed = projectAcf.liensProjet
            info["Type"] = projectAcf.type
            info["Rôle(s) dans le projet"] = projectAcf.roleDansLeProjet
            info["Logiciel(s) utilisé"] = projectAcf.logicielsUtilise
            break
        case "video":
            embed = projectAcf.liensVersVideo
            info["Logiciel(s) utilisé"] = projectAcf.logicielsUtilise
            info["Crédits"] = projectAcf.credits
            break
        case "web":
            if(projectAcf.lienVersLeSite){
                info["Lien vers le site web"] = `<a href="${projectAcf.lienVersLeSite}" target="_blank" rel="noreferrer">${projectAcf.lienVersLeSite}</a>`
            }
            if(projectAcf.lienVersLeCode){
                info["Lien vers le code source"] = `<a href="${projectAcf.lienVersLeCode}" target="_blank" rel="noreferrer">${projectAcf.lienVersLeCode}</a>`
            }
            break
        default:
            break
    }


    return(
        <Container>
            {info &&
                <section>
                    <Row>
                        {embed &&
                            <Col lg="7">
                                {embed.map((link, index) => (
                                    <Embed link={link.oembed} key={index}/>
                                ))}
                            </Col>
                        }
                        <Col>
                            <Info info={info}/>
                        </Col>
                    </Row>
                </section>
            }
            {description &&
                <section>
                    <Row>
                        <Col lg="4">
                            <h3>Description</h3>
                        </Col>
                        <Col>
                            <div dangerouslySetInnerHTML={description}/>
                        </Col>
                    </Row>
                </section>
            }
            {images &&
                <section>
                        <Masonry breakpointCols={{default: 4, 992: 2, 576: 1}} className="masonry-grid" columnClassName="masonry-grid-col">
                            {images.map((image, index) => (
                                <ProjectImage image={image} key={index}/>
                            ))}
                        </Masonry>
                </section>
            }
        </Container>
    )
}

export default ProjectInfo