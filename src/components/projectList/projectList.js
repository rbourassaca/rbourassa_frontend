import React from "react"
import { Container } from "react-bootstrap"
import Project from "./project/project.js"

const ProjectList = ({projects, archive, defaultThumbnail}) => {
    return (
        <section className="list">
            <Container>
                {projects.map((project, index) =>
                    <Project project={project} key={index} archive={archive} defaultThumbnail={defaultThumbnail}/>
                )}
            </Container>    
        </section>
    )
}

export default ProjectList