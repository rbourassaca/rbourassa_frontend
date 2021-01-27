import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"
import OfferedServices from "../components/offeredServices/offeredServices.js"

export const query = graphql`
    query {
        file(relativePath: {eq: "logo_big.png"}){
            childImageSharp{
                fluid(maxWidth: 700){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        wp{
            homeSettings{
                home{
                    nomDeLaPage
                    servicesOfferts{
                        pour
                        icone{
                            localFile{
                                childImageSharp{
                                    fixed(width: 80){
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                        sousServices{
                            nom
                        }
                    }
                }
            }
            heroSettings{
                images{
                    accueil{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: 3840){
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

const index = ({data}) => {
    const title = data.wp.homeSettings.home.nomDeLaPage
    const logoBig = data.file.childImageSharp.fluid
    const heroImages = data.wp.heroSettings.images.accueil
    const services = data.wp.homeSettings.home.servicesOfferts
    var background

    if(typeof(heroImages) === "object" && heroImages.length > 1){
        background = heroImages[Math.floor((Math.random() * heroImages.length))].localFile.childImageSharp.fluid
    }else{
        background = heroImages[0].localFile.childImageSharp.fluid
    } 

    return (
        <Layout>
            <SEO title={title} />
            <Hero logo={logoBig} background={background}/>
            <OfferedServices services={services}/>
        </Layout>
    )
}

export default index