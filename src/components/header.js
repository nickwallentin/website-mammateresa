import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

import { Sec, Wrap } from "../components/styled"

import Logo from "../assets/mamma-teresa-logo.svg"
import SubNav from "../components/subnav"

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  & a svg {
    max-width: 250px !important;
  }
  @media screen and (max-width: 980px) {
    & a svg {
      max-width: 150px !important;
    }
  }
`
const LinksContainer = styled.div`
  display: flex;
  align-content: center;
  & > a {
    padding: 5px 10px;
    margin-right: 10px;
    color: black;
    text-decoration: none;
    &:last-of-type {
      margin-right: 0px;
    }
  }
`

const MenuCTA = styled.a`
  padding: 5px 15px !important;
  color: white !important;
  background: #455137;
  display: inline-block;
  line-height: 1.5rem;
`
const GlobalMessage = styled(Link)`
  padding: 10px;
  background: #455137;
  color: white;
  text-align: center;
  display: block;
  margin: 0px;
  font-size: 1rem;
  line-height: 1.2rem;
`

const Header = () => (
  <header>
    <GlobalMessage to="/bestall-online">
      Nyhet! Nu kan du beställa online. Klicka här för att läsa mer.
    </GlobalMessage>

    <nav style={{ padding: "20px 0px" }}>
      <Wrap>
        <NavItems>
          <Link to="/">
            <Logo style={{ maxWidth: "50px" }}></Logo>
          </Link>
          <LinksContainer>
            <Link to="/meny">Meny</Link>
            <Link className="hide-mobile" to="/catering">
              Catering
            </Link>
            <Link className="hide-mobile" to="/om-mamma-teresa">
              Om Mamma Teresa
            </Link>
            <Link className="hide-mobile" to="/kontakt">
              Kontakt
            </Link>
            <MenuCTA
              href="https://web.trueapp.se/mammateresa/store1/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Beställ online
            </MenuCTA>
          </LinksContainer>
        </NavItems>
      </Wrap>
    </nav>
    <SubNav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
