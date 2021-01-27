import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"
import ProjectList from "../components/projectList/projectList.js"

export const query = graphql`
    query ($id: String, $maxWidth: Int=3840, $thumb: Int=350) {
        wpContentType(id: {eq: $id}) {
            label
            name
        }
        allWpContentNode(filter: {contentType: {node: {id: {eq: $id}}}}){
            nodes{
                ... on WpAudio{
                    id
                    title
                    uri
                    acf_audio{
                        description
                    }
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp{
                                    fluid(maxWidth: $thumb){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
                ... on WpVideo{
                    id
                    title
                    uri
                    acf_video{
                        description
                    }
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp{
                                    fluid(maxWidth: $thumb){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
                ... on WpWeb{
                    id
                    title
                    uri
                    acf_web{
                        description
                    }
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp{
                                    fluid(maxWidth: $thumb){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
                ... on WpClient{
                    id
                    title
                    uri
                    acf_client{
                        description
                    }
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp{
                                    fluid(maxWidth: $thumb){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        wp{
            themeSettings{
                general{
                    thumbnailParDefaut{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $thumb){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
            heroSettings{
                images{
                    audio{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    video{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    web{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    client{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
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

const wptemplate = ( {data} ) => {
    const archive = data.wpContentType
    const heroImages = data.wp.heroSettings.images[archive.name]
    const defaultThumbnail = data.wp.themeSettings.general.thumbnailParDefaut.localFile
    var projects = data.allWpContentNode.nodes;
    var background;

    if(typeof(heroImages) === "object" && heroImages.length > 1){
        background = heroImages[Math.floor((Math.random() * heroImages.length))].localFile.childImageSharp.fluid
    }else{
        background = heroImages[0].localFile.childImageSharp.fluid
    } 

    return (
        <Layout>
            <SEO title={archive.label} />
            <Hero title={archive.label} background={background}/>
            <ProjectList projects={projects} archive={archive.name} defaultThumbnail={defaultThumbnail}/>
        </Layout>
    )
}

export default wptemplate