/** HERO COMPONENT **/

import * as React from "react"
import { Link } from "gatsby"
// import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image" 

const Hero = () => {
  // const data = useStaticQuery(graphql`
  //   query HeroQuery {
  //     site {
  //       siteMetadata {
  //         author {
  //           name
  //           summary
  //         }
  //         social {
  //           twitter
  //         }
  //       }
  //     }
  //   }
  // `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  // const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  return (
    <> 
      <div id="hero"  className="overlay"></div>
      <StaticImage
        className="hero-img"
        // layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/hero.jpg"
        quality={95}
        alt="Photo by Jason Wong on Unsplash"
        /> 
        <div className="hero-text"  >
          <StaticImage
            className="avatar mx-auto mb-5 animate__animated animate__zoomIn animate__delay-1s 1s "
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/mohan.jpg"
            width={150}
            height={150}
            quality={95}
            alt="Profile picture"
          />  
          <h2 className="animate__animated animate__zoomIn animate__delay-2s 2s">Hi, I'm Mohan and I develop websites.</h2> 
          
          <Link className="down-arrow animate__animated animate__zoomIn animate__delay-3s 3s" to="/#about" > 
            <StaticImage
                className="mt-5 animate__animated animate__shakeY animate__delay-5s 5s animate__slower  20s animate__repeat-3 3"
                // layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/icons/chevron-down-white.svg"
                width={50}
                height={50}
                quality={95}
                alt="arrow"
                />  
          </Link>
        </div> 
    </>
  )
}

export default Hero
