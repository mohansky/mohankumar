/** CONTACT COMPONENT**/

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { Container, Col} from "react-bootstrap"

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
        <h3 className="text-center fw-bolder mb-5">
          Get in touch 
        </h3>
    
        <Col>
          <h4 className="text-center">Thank you for your message.</h4>
        </Col> 
      </Container>  
    </section>
  )
}

export default ThankYou
