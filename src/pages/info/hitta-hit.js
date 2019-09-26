import React from "react"

import Layout from "../../components/layout"
import { Sec, Wrap, Button } from "../../components/styled"

const FindUsPage = () => {
  return (
    <Layout>
      <Sec>
        <Wrap style={{ maxWidth: "500px", textAlign: "center" }}>
          <h1>
            Hitta hit <span>Välkommen in</span>
          </h1>
          <p>Storgatan 27, 261 31 Landskrona</p>
          <a
            target="_blank"
            href="https://www.google.se/maps/dir//Mamma+Teresa,+Storgatan+27,+261+31+Landskrona/@55.8698323,12.826627,17z/data=!4m16!1m6!3m5!1s0x4653b5c28e2566d3:0x359a883e76511ae1!2sMamma+Teresa!8m2!3d55.8698293!4d12.8288157!4m8!1m0!1m5!1m1!1s0x4653b5c28e2566d3:0x359a883e76511ae1!2m2!1d12.8288157!2d55.8698293!3e2"
            rel="noopener noreferrer"
            style={{
              padding: "15px",
              border: "2px solid #d8d8d8",
              marginTop: "15px",
              display: "block",
            }}
          >
            Öppna i Google Maps
          </a>
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default FindUsPage
