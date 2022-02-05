/** CONTACT COMPONENT**/

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const Contact = () => {
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

                <Form name="contact" method="POST" data-netlify="true" action="/thankyou#contact"netlify-honeypot="bot-field">
                <p className="hidden">
                  <label>
                    Dont fill this out if youre human: <input name="bot-field" type="hidden" value="contact" />
                  </label>
                </p>
                <Row>
                  <Col xs={12} md={6}>
                  <Form.Group className="mb-5" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Name" required/> 
                  </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                  <Form.Group className="mb-5" controlId="formEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" name="email" placeholder="E-mail" required/>
                  </Form.Group>
                  </Col>
                </Row>


                <Col md={{ span: 6, offset: 1 }}>
                <Form.Group className="mb-5" controlId="formCheckbox">
                  <Form.Check
                      className="mb-3"
                      type="radio"
                      label="I know exactly what sort of website I need and how it should look."
                      name="option1"
                      id="formRadios1"
                    />
                    <Form.Check
                      className="mb-3"
                      type="radio"
                      label="I'm not sure what is feasible and only have a vague idea of what my website could to look like. "
                      name="option1"
                      id="formRadios2"
                    />
                    <Form.Check
                      className="mb-3"
                      type="radio"
                      label="I already have a website, but I'm not happy with it and would like some changes."
                      name="option1"
                      id="formRadios3"
                    />
                </Form.Group>
                </Col>

              <Form.Group className="mb-5" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} required/>
              </Form.Group>

              <Button className="float-end btn-form" type="submit">
                SUBMIT
              </Button>
            </Form>

          </Col>          
        </Row>
      </Container>  





    </section>
  )
}

export default Contact
