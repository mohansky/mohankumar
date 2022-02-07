/** SERVICES COMPONENT **/

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Container, Row, Col, Card, CardGroup } from 'react-bootstrap'

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      services: markdownRemark(frontmatter: {title: {eq: "Services"}}) {
          frontmatter {
            title
            subtitle1
            subtitle2
            subtitle3
            description1
            description2
            serviceitems {
              name
              desc
              img {
                childImageSharp {
                  gatsbyImageData( placeholder: TRACED_SVG, layout: FIXED, width: 100  )
                }
              }  
            }
          }
        }
      }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js 
  const service = data.services.frontmatter

  return (
    <section id="services">
      <Container className="section-top">
        <Row>
        
          <Col md={4}>
            <h4 className="text-end fw-bolder" data-aos="fade-right">
                {service.subtitle1} 
              <span className="accent"> 
                {service.subtitle2} </span> 
              <br/> 
                {service.subtitle3}
            </h4>
          </Col>
          
          <Col md={1}></Col>
    
          <Col md={7}>
            <p data-aos="fade-left">
             {service.description1}
              <br/> <br/>
              {service.description1}
            </p>

            <CardGroup>
              {service.serviceitems.map((items, index)=>{
                const item = items 
                const image = getImage(item.img.childImageSharp.gatsbyImageData)
                  return(
                    <Card key={index} className="border-0" data-aos="fade-right">
                      <GatsbyImage
                        className="mx-auto"
                        image={image} 
                        alt={item.name} 
                        />
                    <Card.Body className="text-center">
                      <Card.Title>
                        {item.name} 
                      </Card.Title>
                      <Card.Text>
                        {item.desc}  
                      </Card.Text> 
                  </Card.Body>
                </Card>
              )})}
            </CardGroup>        

          </Col>
        </Row>

        {/* <Row>
          <Col md={5}></Col>

          <Col md={7}>
            <CardGroup>
              {service.serviceitems.map((items, index)=>{
                const item = items 
                const image = getImage(item.img.childImageSharp.gatsbyImageData)
                  return(
                    <Card key={index} className="border-0" data-aos="fade-right">
                      <GatsbyImage
                        className="mx-auto"
                        image={image} 
                        alt={item.name} 
                        />
                    <Card.Body className="text-center">
                      <Card.Title>
                        {item.name} 
                      </Card.Title>
                      <Card.Text>
                        {item.desc}  
                      </Card.Text> 
                  </Card.Body>
                </Card>
              )})}
            </CardGroup>        
          </Col>
        </Row> */}
      </Container>
    </section>
  )
}

export default Services
