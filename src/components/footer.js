/** FOOTER COMPONENT **/

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby" 
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
//    const data = useStaticQuery(graphql`
//      query BioQuery {
//        site {
//          siteMetadata {
//            author {
//              name
//              summary
//            }
//            social {
//              twitter
//            }
//          }
//        }
//      }
//    `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
//    const author = data.site.siteMetadata?.author
//    const social = data.site.siteMetadata?.social

  return (
    <footer className="d-flex justify-content-between">

      <p> Developed with &hearts; and ♫ in Bangalore  </p>
     
      <p> Mohan Kumar © {new Date().getFullYear()} </p>

  </footer>
  )
}

export default Footer
