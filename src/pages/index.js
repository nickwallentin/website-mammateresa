import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import IndexTopSection from "../components/ui/index/slideshowsection"
import IndexMenySection from "../components/ui/index/menusection"
import IndexCateringSection from "../components/ui/index/cateringsection"
import IndexSocialSection from "../components/ui/index/socialsection"

const IndexPage = () => (
  <Layout>
    <SEO lang="sv" title="Mamma Teresa Restaurang & Pizzeria" />
    <IndexTopSection />
    <IndexMenySection />
    <IndexCateringSection />
    <IndexSocialSection />
  </Layout>
)

export default IndexPage
