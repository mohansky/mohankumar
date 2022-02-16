/** HEADER COMPONENT **/

import React, {useState} from "react"
 import { useStaticQuery, graphql } from "gatsby" 
 import {Nav, Navbar, Container} from 'react-bootstrap'
 
 const Header = () => {
   const data = useStaticQuery(graphql`
        query HeaderQuery {
            site {
                siteMetadata {
                nav {
                    name
                    url
                }
            }
        }
    }
`)
 
// Set these values by editing "siteMetadata" in gatsby-config.js
const nav = data.site.siteMetadata?.nav

const [expanded, setExpanded] = useState(false);

    return (
        <Navbar className="nav" variant="dark" sticky="top" expand="lg" expanded={expanded}>
            <Container >
                <Navbar.Brand className="d-none d-md-block" href="/#hero">mohan<span className="fw-bold">KUMAR</span></Navbar.Brand>
                <Navbar.Brand className="d-sm-block d-md-none" href="/#hero">m<span className="fw-bold">K</span></Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#basic-navbar-nav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation" 
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                    />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="text-center">
                        {nav.map((data, index) => {
                            return (  
                                <Nav.Item key={{index}}> 
                                    <Nav.Link 
                                        className="fw-bold" 
                                        href={data.url} 
                                        onClick={() => setExpanded(false)}>
                                            {data.name}
                                    </Nav.Link>
                                    <hr className="d-md-block d-lg-none navlink-border"/>
                                </Nav.Item> 
                            )})} 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    )
}
 
export default Header




