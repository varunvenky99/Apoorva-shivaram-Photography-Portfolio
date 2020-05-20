import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SRLWrapper } from "simple-react-lightbox"
import "../style/style.scss"
import Layout from "./layout"
import Img from "gatsby-image"
import posed from "react-pose"

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 0.99,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.0,
    boxShadow: "0px 10px 5px rgba(0,0,0,0.1)",
  },
})
const options = {
  buttons: {
    backgroundColor: "rgba(30,30,36,0.8)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    iconPadding: "5px",
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    size: "40px",
  },
  thumbnails: {
    showThumbnails: false,
  },
}
const MyComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      leaf1: file(relativePath: { eq: "sandiego/1.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf2: file(relativePath: { eq: "sandiego/2.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf3: file(relativePath: { eq: "sandiego/3.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf4: file(relativePath: { eq: "sandiego/4.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf5: file(relativePath: { eq: "sandiego/5.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf6: file(relativePath: { eq: "sandiego/6.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf7: file(relativePath: { eq: "sandiego/7.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf8: file(relativePath: { eq: "sandiego/8.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf9: file(relativePath: { eq: "sandiego/9.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf10: file(relativePath: { eq: "sandiego/10.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf11: file(relativePath: { eq: "sandiego/11.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf12: file(relativePath: { eq: "sandiego/12.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf13: file(relativePath: { eq: "sandiego/13.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf14: file(relativePath: { eq: "sandiego/14.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf15: file(relativePath: { eq: "sandiego/15.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf16: file(relativePath: { eq: "sandiego/16.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf17: file(relativePath: { eq: "sandiego/17.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf18: file(relativePath: { eq: "sandiego/18.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf19: file(relativePath: { eq: "sandiego/19.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf20: file(relativePath: { eq: "sandiego/20.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf21: file(relativePath: { eq: "sandiego/21.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf22: file(relativePath: { eq: "sandiego/22.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf23: file(relativePath: { eq: "sandiego/23.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf24: file(relativePath: { eq: "sandiego/24.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf25: file(relativePath: { eq: "sandiego/25.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="MyComponent">
        <SRLWrapper options={options}>
          <div className="container">
            <div class="row">
              <div class="column">
                <div
                  className="img1 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf3.childImageSharp.fluid} />
                  </Box>
                </div>

                <div
                  className="img2 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf2.childImageSharp.fluid} />
                  </Box>
                </div>

                <div
                  className="img3 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="100"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf1.childImageSharp.fluid} />
                  </Box>
                </div>

                <div
                  className="img4 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf4.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img5 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf5.childImageSharp.fluid} />
                  </Box>
                </div>

                <div
                  className="img6 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf6.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img7 img "
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf7.childImageSharp.fluid} />
                  </Box>
                </div>

                <div
                  className="img8 img "
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf8.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img9 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf9.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img10 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf10.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img11 img "
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf11.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img12 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf12.childImageSharp.fluid} />
                  </Box>
                </div>
              </div>
              <div class="column">
                <div
                  className="img13 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf13.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img14 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf14.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img15 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf15.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img16 img "
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf16.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img17 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf17.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img18 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf18.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img19 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf19.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img20 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf20.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img21 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf21.childImageSharp.fluid} />
                  </Box>
                </div>

                <div
                  className="img22 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf22.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img23 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf23.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img24 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf24.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img25 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Box className="box">
                    <Img fluid={data.leaf25.childImageSharp.fluid} />
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </SRLWrapper>
      </div>
    </Layout>
  )
}

export default MyComponent
