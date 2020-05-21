import React from "react"
import Layout from "../components/layout"
import "../style/abt.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="https://apoorvashivaram.com/contact" />
      </Helmet>
      <div className="ro">
        <div
          className="co left"
          data-sal-duration="1200"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-out-bounce"
        >
          <Img fluid={data.profile.childImageSharp.fluid} className="avatar" />
        </div>
        <div className="co right">
          <p>Hi, I’m Apoorva.</p>
          <p>
            I’m a Chicago based photographer who is originally from the other
            side of the world from Bangalore, India. I originally got into
            photography when my (cousin) brother handed me his camera and told
            me I had an eye for it, back in 2016. Shortly after, I moved to
            Chicago to start graduate school in Psychology. Photography became
            my way of exploring Chicago. Eventually, this translated into a love
            for detail - whether it's the new leaf that pops up on a plant down
            the street or chasing sunrises and sunsets. What amazes me about
            photography is the ability to capture an experience and an emotion
            in one picture. It has the power to transport me back into another
            day and time and digging through my archives, I'm reminded of that
            every day. I started off by capturing the city, but I'm slowly
            evolving into capturing memories. That being said, I'm still
            learning - whether it's figuring out new camera settings or finding
            new perspectives to capture the same image. But one thing has stayed
            constant - my interest in capturing aesthetically pleasing photos.
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage
