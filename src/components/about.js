/** ABOUT COMPONENT **/

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import {Container, Row, Col } from 'react-bootstrap'

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query BioQuery {
  //     site {
  //       siteMetadata {
  //         author {
  //           name
  //           summary
  //         }
  //         social {
  //           twitter
  //         }
  //       }
  //     }
  //   }
  // `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  // const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  return (
    <section id="about">
      <Container className="section-top">
        <Row>
        
          <Col md={4}>
            <h4 className="text-end fw-bolder" data-aos="fade-right"> A few words  <br/> <span className="accent">about me</span></h4>
          </Col>
          
          <Col md={1}></Col>
    
          <Col md={4}>
            <p data-aos="fade-left">
              I'm a freelance web designer based in Bangalore. I enjoy photography, travelling and a good Rasam every now and then.
            </p>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default About
