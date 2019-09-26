import React from "react"

import Layout from "../components/layout"
import { Sec, Wrap } from "../components/styled"

import SocialSection from "../components/ui/index/socialsection"

const ContactPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap style={{ width: "500px", maxWidth: "90%", textAlign: "center" }}>
          <h1>
            Boka & Beställ <span>Ring Mamma Teresa</span>
          </h1>
          <div>
            <h2
              style={{
                fontFamily: "Georgia",
                marginBottom: "10px",
                fontStyle: "normal",
              }}
            >
              0418-194 30
            </h2>
            <h4 style={{ fontFamily: "Georgia", fontWeight: "300" }}>
              eller 0418-49 09 20
            </h4>
          </div>
        </Wrap>
      </Sec>
      <SocialSection></SocialSection>
    </Layout>
  )
}

export default ContactPage
