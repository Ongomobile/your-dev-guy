import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import "./styles.css"

export const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo100.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return <GatsbyImage className="bounce-in-right" image={image} alt="Your Dev Guy Logo" />
}
