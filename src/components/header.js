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

const Header = () => (
  <header>
    <nav style={{ padding: "20px 0px" }}>
      <Wrap>
        <NavItems>
          <Link to="/">
            <Logo style={{ maxWidth: "350px" }}></Logo>
          </Link>
          <LinksContainer>
            <Link to="/meny">Meny</Link>
            <Link to="/catering">Catering</Link>
            <Link className="hide-mobile" to="/om-mamma-teresa">
              Om Mamma Teresa
            </Link>
            <Link className="hide-mobile" to="/kontakt">
              Kontakt
            </Link>
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
