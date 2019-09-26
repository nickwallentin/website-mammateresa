import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Sec, Wrap } from "../../styled"
import WhiteArrowRight from "../../../assets/white-arrow-right.svg"
import SlideShow from "./components/slideshow"

const CallToAction = styled(Link)`
  padding: 30px;
  background: #455237;
  max-width: 500px;
  width: 90%;
  display: block;
  text-align: center;
  color: white;
  text-decoration: none;
  margin: 0 auto;
  font-family: "Playfair Display";
  font-style: italic;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -42px;
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 30px #00000080;
  transition: all 200ms;
  &:hover {
    transform: scale(1.2);
  }
`

const IndexTopSection = () => {
  return (
    <Sec>
      <Wrap>
        <SlideShow></SlideShow>
        <CallToAction to="/meny">
          Upptäck vår meny <WhiteArrowRight />
        </CallToAction>
      </Wrap>
    </Sec>
  )
}

export default IndexTopSection
