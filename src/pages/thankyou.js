import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"  
import Services from "../components/services"
import Work from "../components/work"
import Process from "../components/process"
import ThankYou from "../components/thank-you"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title` 

  return (
    <Layout location={location} title={siteTitle}> 
      <Seo title="Mohan Kumar" /> 
      <Services/>
      <Work/>
      <Process/>
      <ThankYou/>  
    </Layout>
  )
  }

export default Home

export const HomepageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
