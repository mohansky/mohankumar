import * as React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo" 
import About from "../components/about"
import Services from "../components/services"
import Work from "../components/work"
import Process from "../components/process"
import Contact from "../components/contact"

const Home = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  return (
    // <Layout location={location} title={siteTitle}>
    <Layout location={location}>  
      <Seo title="Mohan Kumar" />
      <About />
      <Services/>
      <Work/>
      <Process/>
      <Contact/>  
    </Layout>
  )
  }

export default Home

// export const HomepageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `
