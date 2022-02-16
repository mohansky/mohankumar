/** SERVICES COMPONENT **/

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Container, Row, Col } from 'react-bootstrap'

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
              img {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG)
                }
              }  
            }
            toolsitems {
              name 
              img {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG )
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
      <Container fluid="md" className="section-top">
        <h3 className="text-center fw-bolder mb-3">
          {service.subtitle1}  
        </h3>  

        <Row>
          <Col className="mx-auto" xs={12} md={8}>
            <p className="mb-3">
             {service.description1}
            </p> 

          <Row className="mb-3">
            {service.toolsitems.map((items, index)=>{
              const item = items 
              const image = getImage(item.img.childImageSharp.gatsbyImageData)
                return(
                  <Col xs={4} sm={4} md={4} lg={2} key={index} className="border-0">
                    <GatsbyImage
                      className="mx-auto services-img"
                      image={image} 
                      alt={item.name} 
                      />
                  </Col>
            )})}
          </Row>       
             
            <p className="mb-3"> 
              {service.description2}
            </p>

          <Row className="mb-3">
            {service.serviceitems.map((items, index)=>{
              const item = items 
              const image = getImage(item.img.childImageSharp.gatsbyImageData)
                return(
                  <Col xs={4} sm={4} md={4} lg={2}  key={index} className="border-0">
                    <GatsbyImage
                      className="mx-auto services-img"
                      image={image} 
                      alt={item.name} 
                      />
                    <div className="text-center">
                      <div className="serviceitem-title text-uppercase">
                        {item.name} 
                      </div> 
                  </div>
                </Col>
              )})}
            </Row>        
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
