import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"  
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Col, Container, Row } from "react-bootstrap"

const WorkPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const image = getImage(post.frontmatter.img.childImageSharp.gatsbyImageData)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.desc || post.excerpt}
      />
      <Container>
        <article className="blog-post">
          <header>
            <h1 className="my-5">{post.frontmatter.title}</h1> 
          </header>
            <section>
              <Row>
                <Col md={6} className="mt-3">
                  <GatsbyImage 
                    image={image} 
                    alt={post.frontmatter.title} 
                  />
                </Col>
          
                <Col md={6} className="mt-3">
                  
                  <h5 className="work-type">{post.frontmatter.sitetype}</h5>
                  <p>{post.frontmatter.desc}</p>  
                  <a className="work-link" href={post.frontmatter.url} target="_blank" rel="noreferrer"> 
                    {post.frontmatter.url}
                  </a>

                  <ul className="list-group list-group-horizontal border-0 mt-3">
                    {post.frontmatter.tools.map((toolitems, index)=>{
                      const toolitem = toolitems
                      return(
                      <li class="list-group-item" key={index}>
                        <small className="text-muted">{toolitem}</small>
                      </li>
                      )})} 
                  </ul> 
                </Col>
              </Row>
            </section>
          <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" /> 
        </article>
      </Container>

      <nav className="work-post-nav">
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <StaticImage
                  className="p-2" 
                  formats={["auto", "webp", "avif"]}
                  src="../images/icons/chevron-left.svg"
                  width={25}
                  height={25}
                  quality={95}
                  alt="arrow"
                  />
                <h6>
                  {previous.frontmatter.title}
                </h6>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                <h6>
                  {next.frontmatter.title}
                </h6>  
                <StaticImage
                  className="p-2" 
                  formats={["auto", "webp", "avif"]}
                  src="../images/icons/chevron-right.svg"
                  width={25}
                  height={25}
                  quality={95}
                  alt="arrow"
                  />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default WorkPostTemplate

export const pageQuery = graphql`
  query WorkPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
    previous: markdownRemark(frontmatter: {type: {eq: "Work"}}, id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(frontmatter: {type: {eq: "Work"}}, id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
