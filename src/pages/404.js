import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero.js"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Hero title="404" subtitle="Humm... la page n'existe pas..."/>
  </Layout>
)

export default NotFoundPage
