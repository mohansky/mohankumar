/** WORK COMPONENT **/

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image" 
import { Container, Card, Button } from "react-bootstrap" 
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const data = useStaticQuery(graphql`
    query WorkQuery {
      allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}
        filter: {frontmatter: {type: {eq: "Work"}}}
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            url
            sitetype
            desc
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
const posts = data.allMarkdownRemark.nodes  
  return (
    <section id="work">
      <Container fluid className="section-top"> 
        <h3 className="text-center mb-5 fw-bold">
          Things I've done
        </h3>  
        <Slider className="mx-3" {...settings}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const work = post.frontmatter
            const image = getImage(post.frontmatter.img.childImageSharp.gatsbyImageData)
          
          return(
            <article key={post.fields.slug}> 
              <Card className="border-0 m-3 p-3">
                <GatsbyImage
                  className="shadow p-3 mb-5 bg-body" 
                  image={image} 
                  alt={title} 
                  />
              <Card.Body className="text-center ">
                <Card.Title className="fw-bold">{title}</Card.Title>
                  <Card.Text> 
                    {/* <h5 className="work-type">{work.sitetype}</h5> */}
                    <p>{work.desc}</p>   
                    <Link to={post.fields.slug} itemProp="url">
                      <Button className="btn-work"> View Details</Button> 
                    </Link>
                  </Card.Text> 
                </Card.Body> 
              </Card>
            </article> 
          )})}  
        </Slider>
      </Container>
    </section>
  )
}

export default Work