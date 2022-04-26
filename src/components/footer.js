import { Link, graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import React from 'react';
import SubNav from '../components/subnav';
import { Wrap } from '../components/styled';
import styled from 'styled-components';

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
`;

const FooterCopy = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: italic;
  font-size: 14px;
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

const Footer = () => {
  const { file } = useStaticQuery(graphql`
    query GetCertificateImage {
      file(name: { eq: "mamma-teresa-certificate" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(file);
  return (
    <footer>
      <SubNav />
      <Wrap>
        <FooterNav>
          <Link to='/meny'>Meny</Link>
          <Link to='/lunch'>Lunch</Link>
          <Link to='/catering'>Catering</Link>
          <Link to='/om-mamma-teresa'>Om Mamma Teresa</Link>
          <Link to='/kontakt'>Kontakt</Link>
          <Link to='/press'>Press</Link>
        </FooterNav>
        <FooterCopy>
          <a
            href='https://www.tripadvisor.se/Restaurant_Review-g1207904-d3139486-Reviews-Mamma_Teresa-Landskrona_Landskrona_Municipality_Skane_County.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Img
              style={{ width: '300px' }}
              fluid={file.childImageSharp.fluid}
            />
          </a>
          <div>
            © {new Date().getFullYear()} Mamma Teresa. Org.nr: 556889-0577
          </div>

          <div>Skapad med kärlek av Creandia.</div>
        </FooterCopy>
      </Wrap>
    </footer>
  );
};

export default Footer;
