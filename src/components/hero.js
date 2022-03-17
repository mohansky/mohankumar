/** HERO COMPONENT **/

import * as React from "react" 
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image" 

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          hero {
            herotext
            heroimgalt
            iconimgalt
          }
        }
      } 
    }         
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js  
  const hero = data.site.siteMetadata?.hero

  // src="../images/herocopy1.png"

  return (
    <> 
      <div id="hero"  className="overlay"></div>
        <StaticImage
          className="hero-img" 
          objectFit= "fill"
          formats={["auto", "webp", "avif"]}
          src="../images/dotshero.svg"
          quality={95}
          alt={hero.heroimgalt}
          />  
        <div className="hero-text">
          <h2 className="animate__animated animate__zoomIn animate__delay-2s 2s"> 
            {hero.herotext}
          </h2> 
            
        <Link className="down-arrow animate__animated animate__zoomIn animate__delay-3s 3s" to="/#services" > 
          <StaticImage
            className="mt-5 animate__animated animate__bounce animate__delay-5s 5s animate__slower animate__infinite 	infinite" 
            formats={["auto", "webp", "avif"]}
            src="../images/icons/chevron-down.svg"
            width={75}
            height={75}
            quality={95}
            alt={hero.iconimgalt}
            />  
        </Link>
      </div> 
    </>
  )
}

export default Hero