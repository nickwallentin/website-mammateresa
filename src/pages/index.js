import IndexCateringSection from "../components/ui/index/cateringsection"
import IndexMenySection from "../components/ui/index/menusection"
import IndexSocialSection from "../components/ui/index/socialsection"
import IndexTopSection from "../components/ui/index/slideshowsection"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO lang="sv" title="Mamma Teresa Restaurang & Pizzeria" />
    <IndexTopSection />
    <IndexMenySection />
    <IndexCateringSection />
    {/* <SocialSection></SocialSection> */}
  </Layout>
)

export default IndexPage
