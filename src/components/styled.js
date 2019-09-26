import styled from "styled-components"

// LAYOUT
export const Sec = styled.div`
  background: ${props => props.bg || "white"};
  padding: ${props => props.space || "40px 0px"};

  & h1,
  h2,
  h3,
  h4 {
    font-family: "Playfair Display";
    font-style: italic;
  }
  p {
    color: #00000080;
  }

  h1 span,
  h3 span {
    display: block;
    font-size: 60%;
    font-family: "Georgia";
    font-weight: 300;
    opacity: 0.8;
    margin-top: 5px;
  }
`
export const Wrap = styled.div`
  width: ${props => props.fullWidth || "100%"};
  max-width: ${props => props.width || "95%"};
  margin: 0 auto;
  position: relative;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.cols || "1fr"};
  grid-gap: ${props => props.gap || "20px"};

  @media screen and (max-width: 980px) {
    grid-template-columns: ${props => props.mcols || "1fr"};
    grid-gap: ${props => props.mgap || "20px"};
  }
`
export const Col = styled.div`
  display: ${props => (props.flex ? "flex" : "block")};
  flex-direction: ${props => (props.col ? "column" : "row")};
  justify-content: ${props => props.justify || "initial"};
  align-items: ${props => props.align || "initial"};
  padding: ${props => props.space || "0px"};
`
export const Button = styled.button`
  padding: 15px;
  max-width: 500px;
  border: 2px solid #d8d8d8;
  background: transparent;
`
