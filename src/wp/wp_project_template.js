import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"
import ProjectInfo from "../components/projectInfo/projectInfo.js"

export const data = graphql `
    query($id: String, $maxWidth: Int=3840){
        wpContentNode(id: {eq: $id}) {
            ... on WpAudio{
                title
                featuredImage {
                    node {
                        localFile {
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                acf_audio{
                    nom
                    description
                    logicielsUtilise
                    roleDansLeProjet
                    type
                    liensProjet{
                        oembed
                    }
                    client{
                        ... on WpClient{
                            id
                            title
                        }
                    }
                }
                contentType{
                    node{
                        name
                    }
                }
            }
            ... on WpVideo{
                title
                featuredImage {
                    node {
                        localFile {
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                acf_video{
                    description
                    logicielsUtilise
                    credits
                    liensVersVideo{
                        oembed
                    }
                    photos{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    client{
                        ... on WpClient{
                            id
                            title
                        }
                    }
                }
                contentType{
                    node{
                        name
                    }
                }
            }
            ... on WpWeb{
                title
                featuredImage {
                    node {
                        localFile {
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                acf_web{
                    description
                    lienVersLeCode
                    lienVersLeSite
                    logicielsUtilise
                    client{
                        ... on WpClient{
                            id
                            title
                        }
                    }
                    photos{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                contentType{
                    node{
                        name
                    }
                }
            }
        }
        wp {
            heroSettings {
                images {
                    audio {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: $maxWidth) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    video {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: $maxWidth) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    web {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: $maxWidth) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    client {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: $maxWidth) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const WpProjectTemplate = ({data}) => {
    const title = data.wpContentNode.title
    const contentType = data.wpContentNode.contentType.node.name
    const contentTypeBackground = data.wp.heroSettings.images[contentType]
    var background

    if(data.wpContentNode.featuredImage != null){
        background = data.wpContentNode.featuredImage.node.localFile.childImageSharp.fluid
    }else if(contentTypeBackground.length > 1){
        background = contentTypeBackground[Math.floor((Math.random() * contentTypeBackground.length))].localFile.childImageSharp.fluid
    }else{
        background = contentTypeBackground[0].localFile.childImageSharp.fluid
    }

    return(
        <Layout>
            <SEO title={title} />
            <Hero title={title} background={background}/>
            <ProjectInfo project={data.wpContentNode}/>
        </Layout>
    )
}

export default WpProjectTemplate