/** CONTACT COMPONENT**/

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const ThankYou = () => {
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
    <section id="contact"> 
       <Container className="section-top"> 
        <Row>
          <Col md={4}>
            <h4 className="text-end fw-bolder" data-aos="fade-right">Enough about me,<br/><span className="accent">let's talk</span> about you </h4>
          </Col>
          
          <Col md={1}></Col>
    
          <Col md={7} data-aos="fade-left">
            <h4 className="text-end fw-bolder" data-aos="fade-right">Thank you for your message.</h4>
          </Col>          
        </Row>
      </Container>  
    </section>
  )
}

export default ThankYou
