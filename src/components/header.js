/** HEADER COMPONENT **/

 import * as React from "react"
//  import { useStaticQuery, graphql } from "gatsby"
//  import { StaticImage } from "gatsby-plugin-image"
 import {Nav, Navbar, Container} from 'react-bootstrap'
 
 const Header = () => {
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
    <>
        <Navbar id="header" className="nav sticky-top" variant="dark" expand="lg">
            <Container >
                <Navbar.Brand href="/#hero">mohan<span className="fw-bold">KUMAR</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="text-center">
                        <Nav.Link className="fw-bold ps-5" href="/#about">About</Nav.Link>
                        <Nav.Link className="fw-bold ps-5" href="/#services">Services</Nav.Link>
                        <Nav.Link className="fw-bold ps-5" href="/#work">Work</Nav.Link>
                        <Nav.Link className="fw-bold ps-5" href="/#process">Process</Nav.Link>
                        <Nav.Link className="fw-bold ps-5" href="/#contact">Contact</Nav.Link>  
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
   )
 }
 
 export default Header
 