import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import Hero from "./hero"
import HeroCopy from "./herocopy"
import SSRProvider from 'react-bootstrap/SSRProvider';



const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
      {/* <HeroCopy/> */}
      <Hero/>
      <Header/>
      </>
    )
  } else {
    header = (
      <Header/>
    )
  }

  return (
    <SSRProvider> 
        <div className="global-wrapper" data-is-root-path={isRootPath}> 
          {header} 
          <main>{children}</main>
          <Footer/>
        </div>
    </SSRProvider>
  )
}

export default Layout
