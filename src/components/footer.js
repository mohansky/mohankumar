/** FOOTER COMPONENT **/

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          footer {
            copyright
            email
            footnote
          }
        }
      }
    }
  `)

// Set these values by editing "siteMetadata" in gatsby-config.js 
const footer = data.site.siteMetadata?.footer

  return (
    <footer className="d-sm-flex justify-content-between">  
      <p> {footer.footnote} </p>
      <p> {footer.copyright} {new Date().getFullYear()} |     
        <a className="footer-email" href="mailto:{footer.email}"> {footer.email}</a>
      </p> 
    </footer>
  )
}

export default Footer