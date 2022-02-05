/** PROCESS COMPONENT **/

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

const Process = () => {
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
    <section id="process">
      <Container className="section-top"> 
        <Row>
          <Col md={4}>
            <h4 className="text-end fw-bolder" data-aos="fade-right">How we will<br/><span className="accent"> work together</span></h4>
          </Col>
          
          <Col md={1}></Col>
    
          <Col md={7} data-aos="fade-left">

{/* ****************************** */}            
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <StaticImage
                          className="mx-auto"
                          layout="fixed"
                          formats={["auto", "webp", "avif"]}
                          src="../images/icons/consult.svg" 
                          quality={95}
                          alt="arrow"
                          />
              </div>
              <div class="flex-grow-1 ms-3">
                <h4>Initial consultation</h4>
                <p>Our first meeting or call is free of charge. We will discuss the scope of your project and possible solutions. The idea is to get aligned in terms of requirements and procedure.</p>
              </div>
            </div>
{/* ****************************** */}

{/* ****************************** */}            
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <StaticImage
                          className="mx-auto"
                          layout="fixed"
                          formats={["auto", "webp", "avif"]}
                          src="../images/icons/quotation.svg" 
                          quality={95}
                          alt="arrow"
                          />
              </div>
              <div class="flex-grow-1 ms-3">
                <h4>Quotation</h4>
                <p>Once I know your requirement, I prepare a detailed quote including milestones, deliverables and pricing. I will also factor in some flexibility for ad hoc adjustments.</p>
              </div>
            </div>
{/* ****************************** */}

{/* ****************************** */}            
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <StaticImage
                          className="mx-auto"
                          layout="fixed"
                          formats={["auto", "webp", "avif"]}
                          src="../images/icons/define.svg" 
                          quality={95}
                          alt="arrow"
                          />
              </div>
              <div class="flex-grow-1 ms-3">
                <h4>Define</h4>
                <p>If we agree to work together, our next step will be to define the feature requirements and get the content compiled. If necessary, we will connect with designers or copywriters.</p>
              </div>
            </div>
{/* ****************************** */}

{/* ****************************** */}            
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <StaticImage
                          className="mx-auto"
                          layout="fixed"
                          formats={["auto", "webp", "avif"]}
                          src="../images/icons/design.svg" 
                          quality={95}
                          alt="arrow"
                          />
              </div>
              <div class="flex-grow-1 ms-3">
                <h4>Design</h4>
                <p>Once we have most of the content in place, I will begin designing your website. This is an iterative process and we will revise the design until you are happy with it.</p>
              </div>
            </div>
{/* ****************************** */}

{/* ****************************** */}            
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <StaticImage
                          className="mx-auto"
                          layout="fixed"
                          formats={["auto", "webp", "avif"]}
                          src="../images/icons/develop.svg" 
                          quality={95}
                          alt="arrow"
                          />
              </div>
              <div class="flex-grow-1 ms-3">
                <h4>Develop</h4>
                <p>Only when the design is signed off and all the content/copy has been provided, can the actual web development begin. Trust that I will work with Best Practices in terms of responsiveness, compatibility, performance, accessibility, security and usability in mind.</p>
              </div>
            </div>
{/* ****************************** */}

{/* ****************************** */}            
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <StaticImage
                          className="mx-auto"
                          layout="fixed"
                          formats={["auto", "webp", "avif"]}
                          src="../images/icons/deliver.svg" 
                          quality={95}
                          alt="arrow"
                          />
              </div>
              <div class="flex-grow-1 ms-3">
                <h4>Deliver</h4>
                <p>Our first meeting or call is free of charge. We will discuss the scope of your project and possible solutions. The idea is to get aligned in terms of requirements and procedure.</p>
              </div>
            </div>
{/* ****************************** */}

{/* ****************************** */}            
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <StaticImage
                          className="mx-auto"
                          layout="fixed"
                          formats={["auto", "webp", "avif"]}
                          src="../images/icons/maintain.svg" 
                          quality={95}
                          alt="arrow"
                          />
              </div>
              <div class="flex-grow-1 ms-3">
                <h4>Maintain</h4>
                <p>For those who require continued support, I offer a tailor-made maintenance package. The price for this depends on the anticipated scope.</p>
              </div>
            </div>
{/* ****************************** */}
          </Col>          
        </Row>
      </Container>
    </section>
  )
}

export default Process
