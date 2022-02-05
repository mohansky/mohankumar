/** SERVICES COMPONENT **/

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {Container, Row, Col, Card, CardGroup } from 'react-bootstrap'

const Services = () => {
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
    <section id="services">
      <Container className="section-top">
        <Row>
        
          <Col md={4}>
            <h4 className="text-end fw-bolder" data-aos="fade-right"> What <span className="accent"> I can do </span> <br/> for you</h4>
          </Col>
          
          <Col md={1}></Col>
    
          <Col md={7}>
            <p data-aos="fade-left">
              In technical terms, I'm a front-end developer and work with HTML, CSS and JavaScript to create interactive websites. 
              I prefer static site generators like Hugo and Gatsby, but can also build your website with WordPress if you like. 
              I take a mobile-first approach. 
              <br/> <br/>

              In plain words, I create that part of a website which is visible and with which you interact. 
              Depending on your requirement and budget, I either work alone or in partnership with copywriters, 
              graphic designers and back-end developers.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={5}></Col>
          <Col md={7}>
          <CardGroup>
            <Card className="border-0" data-aos="fade-right">
              <StaticImage
                  className="mx-auto"
                  layout="fixed"
                  formats={["auto", "webp", "avif"]}
                  src="../images/icons/responsive.svg" 
                  quality={95}
                  alt="arrow"
                  /> 
                <Card.Body className="text-center">
                  <Card.Title>Fully responsive</Card.Title>
                  <Card.Text>
                    to ensure compatibility across devices and browsers 
                  </Card.Text> 
                </Card.Body>
              </Card>

              <Card className="border-0" data-aos="fade-right">
              <StaticImage
                  className="mx-auto"
                  layout="fixed"
                  formats={["auto", "webp", "avif"]}
                  src="../images/icons/accessibility.svg"
                  quality={95}
                  alt="arrow"
                  /> 
                <Card.Body className="text-center">
                  <Card.Title>Accessiblity</Card.Title>
                  <Card.Text>
                    guidelines are followed to provide for all types of users
                  </Card.Text> 
                </Card.Body>
              </Card>

              <Card className="border-0" data-aos="fade-right">
              <StaticImage
                  className="mx-auto"
                  layout="fixed"
                  formats={["auto", "webp", "avif"]}
                  src="../images/icons/optimized.svg" 
                  quality={95}
                  alt="arrow"
                  /> 
                <Card.Body className="text-center">
                  <Card.Title>Optimized</Card.Title>
                  <Card.Text>
                    for performance, speed and cross-browser compatibility 
                  </Card.Text> 
                </Card.Body>
              </Card>
            </CardGroup>        
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
