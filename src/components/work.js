/** WORK COMPONENT **/

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image" 
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
  const data = useStaticQuery(graphql`
    query WorkQuery {
      works: markdownRemark(frontmatter: {title: {eq: "Work"}}) {
        frontmatter {
          title
          subtitle1
          subtitle2
          workitems {
            name
            desc
            url
            tools
            img {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js 
  const work = data.works.frontmatter

  return (
    <section id="work">

      <Container className="section-top">
            <h4 className="ms-5 mb-5 fw-bold" data-aos="fade-right">
                {work.subtitle1}
              <span className="accent"> 
                {work.subtitle2} </span>
            </h4>

        <Slider {...settings}  >
          {work.workitems.map((items, index)=>{
            const item = items 
            const image = getImage(item.img.childImageSharp.gatsbyImageData)
              return(
                <a className="work-link" key={index} href={item.url} target="_blank" rel="noreferrer">
                  <Card className="border-0 p-3">
                    <GatsbyImage 
                      image={image} 
                      alt={item.name} 
                      />
                  <Card.Body className="text-center">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text> 
                    <p>
                    {item.desc}
                    </p> 
 

                    <ul className="list-group list-group-horizontal">
                    {item.tools.map((toolitems)=>{
                      const toolitem = toolitems
                        return(
                      <li class="list-group-item me-1 px-2 py-2 border-0 list-group-item-dark" key={index}>
                        <small className="text-muted">{toolitem}</small>
                      </li>
                      )})} 
                    </ul>
                    
                  </Card.Text> 
                  </Card.Body>
                  </Card>
                </a>
              )})} 
            </Slider>
          </Container>
    </section>
  )
}

export default Work