import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SRLWrapper } from "simple-react-lightbox"
import "../style/style.scss"
import Layout from "../components/layout"
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

const Compoturk = () => {
  const data = useStaticQuery(graphql`
    query {
      leaf1: file(relativePath: { eq: "turkey/1.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf2: file(relativePath: { eq: "turkey/2.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf3: file(relativePath: { eq: "turkey/3.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf4: file(relativePath: { eq: "turkey/4.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf5: file(relativePath: { eq: "turkey/5.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      leaf6: file(relativePath: { eq: "turkey/6.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf7: file(relativePath: { eq: "turkey/7.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf8: file(relativePath: { eq: "turkey/8.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf9: file(relativePath: { eq: "turkey/9.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf10: file(relativePath: { eq: "turkey/10.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf11: file(relativePath: { eq: "turkey/11.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf12: file(relativePath: { eq: "turkey/12.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf13: file(relativePath: { eq: "turkey/13.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf14: file(relativePath: { eq: "turkey/14.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf15: file(relativePath: { eq: "turkey/15.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf16: file(relativePath: { eq: "turkey/16.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf17: file(relativePath: { eq: "turkey/17.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf18: file(relativePath: { eq: "turkey/18.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf19: file(relativePath: { eq: "turkey/19.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf20: file(relativePath: { eq: "turkey/20.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf21: file(relativePath: { eq: "turkey/21.jpeg" }) {
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
                    <Img fluid={data.leaf1.childImageSharp.fluid} />
                  </Box>
                </div>

                <div
                  className="img2 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf13.childImageSharp.fluid} />
                  </Box>
                </div>

                <div
                  className="img3 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf2.childImageSharp.fluid} />
                  </Box>
                </div>

                <div
                  className="img4 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf14.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img5 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf3.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img6 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf15.childImageSharp.fluid} />
                  </Box>
                </div>

                <div
                  className="img7 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf4.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img8 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf16.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img9 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf5.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img10 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf17.childImageSharp.fluid} />
                  </Box>
                </div>
              </div>
              <div class="column">
                <div
                  className="img11 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf18.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img12 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf6.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img13 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf7.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img14 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf19.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img15 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf8.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img16 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf20.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img17 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf9.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img18 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf21.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img19 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf10.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img20 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf11.childImageSharp.fluid} />
                  </Box>
                </div>
                <div
                  className="img21 img"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  {" "}
                  <Box className="box">
                    <Img fluid={data.leaf12.childImageSharp.fluid} />
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
export default Compoturk
