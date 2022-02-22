/** PROCESS COMPONENT **/

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

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
            weight
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
        <h3 className="text-center fw-bolder mb-5">
          {process.subtitle1}
        </h3>
        <div className="process"> 
          {process.processitems.map((items, index)=>{
            const item = items 
            const image = getImage(item.img.childImageSharp.gatsbyImageData)
              return(         
                <div key={index} className="process-item">  
                  <div className="process-image-box"> 
                  <div class="process-weight fw-bold">
                  <h5> {item.weight}  </h5>
                  {/* mobile view only */}
                  <h5 class="process-title-stack ms-3">{item.name}</h5> 
                </div>
                <GatsbyImage 
                  image={image} 
                  alt={item.name} 
                  className="m-auto process-image"
                  />
                <h5 class="process-title">{item.name}</h5>
              </div> 
              <div className="process-text">
                {/* mobile view only */}
                <GatsbyImage 
                  image={image} 
                  alt={item.name} 
                  className="m-auto process-image-stack"
                  />
                <p>{item.desc}</p> 
              </div>     
            </div>
          )})} 
        </div>  
      </Container>
    </section>
  )
}

export default Process
