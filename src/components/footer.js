import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Wrap } from "../components/styled"
import SubNav from "../components/subnav"

const FooterNav = styled.div`
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  a {
      color black;
      text-decoration: none;
      padding: 0px 15px;
      margin-right: 10px;
      &:last-of-type {
          margin-right: 0px;
      }
  }
  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    & a {
      padding: 10px 0px;
    }
  }
`

const FooterCopy = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: italic;
  font-size: 14px;
`

const Footer = () => {
  return (
    <footer>
      <SubNav />
      <Wrap>
        <FooterNav>
          <Link to="/meny">Meny</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/om-mamma-teresa">Om Mamma Teresa</Link>
          <Link to="/kontakt">Kontakt</Link>
        </FooterNav>
        <FooterCopy>
          <div>© {new Date().getFullYear()} Mamma Teresa</div>
          <div>Skapad med kärlek av Creandia.</div>
        </FooterCopy>
      </Wrap>
    </footer>
  )
}

export default Footer
