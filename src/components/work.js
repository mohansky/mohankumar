/** CLASSES COMPONENT **/

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Card } from "react-bootstrap" 
import Slider from "react-slick"

const Work = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3 
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
    <section id="work">

      <Container className="section-top">

        <h4 className="ms-5 mb-5 fw-bold" data-aos="fade-right">Stuff I've <span className="accent">created</span></h4>


        <Slider {...settings}  >
          <div >
            <Card className="border-0 p-3">
              <StaticImage
                  className="mx-auto"
                  layout="constrained"
                  formats={["auto", "webp", "avif"]}
                  src="../images/work/as.JPG" 
                  quality={95}
                  alt="arrow"
                  /> 
              <Card.Body className="text-center">
                  <Card.Title>Atma Seva</Card.Title>
                  <Card.Text>
                    to ensure compatibility across devices and browsers 
                  </Card.Text> 
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card className="border-0 p-3">
              <StaticImage
                  className="mx-auto"
                  layout="constrained"
                  formats={["auto", "webp", "avif"]}
                  src="../images/work/bjc.JPG" 
                  quality={95}
                  alt="arrow"
                  /> 
              <Card.Body className="text-center">
                  <Card.Title>Berlinner Job Coach</Card.Title>
                  <Card.Text>
                    to ensure compatibility across devices and browsers 
                  </Card.Text> 
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card className="border-0 p-3">
              <StaticImage
                  className="mx-auto"
                  layout="constrained"
                  formats={["auto", "webp", "avif"]}
                  src="../images/work/lv.JPG"
                  quality={95}
                  alt="arrow"
                  /> 
                <Card.Body className="text-center">
                  <Card.Title>La Volotte</Card.Title>
                  <Card.Text>
                    to ensure compatibility across devices and browsers 
                  </Card.Text> 
              </Card.Body>
            </Card>
          </div>
          
          <div>
            <Card className="border-0 p-3">
              <StaticImage
                  className="mx-auto"
                  layout="constrained"
                  formats={["auto", "webp", "avif"]}
                  src="../images/work/tti.JPG"
                  quality={95}
                  alt="arrow"
                  /> 
                <Card.Body className="text-center">
                  <Card.Title>Toadlabs Technology Inc</Card.Title>
                  <Card.Text>
                    to ensure compatibility across devices and browsers 
                  </Card.Text> 
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card className="border-0 p-3">
              <StaticImage
                  className="mx-auto"
                  layout="constrained"
                  formats={["auto", "webp", "avif"]}
                  src="../images/work/dbus.JPG"
                  quality={95}
                  alt="arrow"
                  /> 
                <Card.Body className="text-center">
                  <Card.Title>Deep Breathe Yoga Studio</Card.Title>
                  <Card.Text>
                    to ensure compatibility across devices and browsers 
                  </Card.Text> 
                </Card.Body>
              </Card>
            </div>
          </Slider>

      </Container>
       
    </section>
  )
}

export default Work