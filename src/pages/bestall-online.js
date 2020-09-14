import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Sec, Wrap } from "../components/styled"

const BestallOnline = () => {
  return (
    <Layout>
      <SEO title="Äntligen kan du beställa online" />

      <Wrap>
        <Sec>
          <h1>Äntligen! Nu har vi onlinebeställning på Mamma Teresa</h1>
          <p>
            Ni beställer i lugn och ro hemma på mobilen, paddan eller datorn,
            betalar med Swish och hämtar maten en liten stund senare. Inga
            sparade kortuppgifter, inga sparade personuppgifter, enkelt och
            smidigt. Ni hittar länk här:{" "}
            <a href="https://web.trueapp.se/mammateresa/store1/">
              Beställ online
            </a>
          </p>

          <p>
            Som vanligt är pizzan klar efter 20 minuter! Ring 0418-19430 när ni
            är på väg så kommer vi ut med maten till bilen.
          </p>

          <p>Nu ses vi på ett nytt sätt, var rädda om er kära kunder!</p>
        </Sec>
      </Wrap>
    </Layout>
  )
}

export default BestallOnline
