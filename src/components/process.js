/** PROCESS COMPONENT **/

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

const Process = () => {
  const data = useStaticQuery(graphql`
    query ProcessQuery {
      processes: markdownRemark(frontmatter: {title: {eq: "Process"}}) {
        frontmatter {
          subtitle1
          subtitle2
          processitems {
            name
            desc
            img {
              childImageSharp {
                gatsbyImageData ( placeholder: TRACED_SVG, layout: FIXED, width: 100 )
              }
            }  
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js 
  const process = data.processes.frontmatter

  return (
    <section id="process">
      <Container className="section-top"> 
        <Row>
          <Col md={4}>
            <h4 className="text-end fw-bolder" data-aos="fade-right">
                {process.subtitle1} <br/>
              <span className="accent"> 
                {process.subtitle2} </span>
            </h4>
          </Col>
          
          <Col md={1}></Col>

          <Col md={7}>
            <div> 
              {process.processitems.map((items, index)=>{
                const item = items 
                const image = getImage(item.img.childImageSharp.gatsbyImageData)
                  return(         
                    <div key={index} class="card mb-3 border-0" data-aos="fade-left" > 
                      <div class="row g-0">
                        <div class="col-md-2"> 
                          <GatsbyImage 
                            image={image} 
                            alt={item.name} 
                            />
                        </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">{item.name}</h5>
                          <p class="card-text">{item.desc}</p> 
                        </div>
                      </div>
                    </div> 
                  </div>
                  )})} 
                </div>
          </Col>          
        </Row>
      </Container>
    </section>
  )
}

export default Process
