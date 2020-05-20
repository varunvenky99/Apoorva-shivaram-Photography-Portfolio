import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SRLWrapper } from "simple-react-lightbox"
import "./st.scss"
import Layout from "../components/layout"
import Img from "gatsby-image"

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

const Compost = () => {
  const data = useStaticQuery(graphql`
    query {
      leaf1: file(relativePath: { eq: "stpaul/1.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf2: file(relativePath: { eq: "stpaul/2.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf3: file(relativePath: { eq: "stpaul/3.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf4: file(relativePath: { eq: "stpaul/4.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf5: file(relativePath: { eq: "stpaul/5.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf6: file(relativePath: { eq: "stpaul/6.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leaf7: file(relativePath: { eq: "stpaul/7.jpg" }) {
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
          <div className="cont">
            <div class="rows">
              <div class="columns">
                <div
                  className="item1 imgs"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Img fluid={data.leaf1.childImageSharp.fluid} />
                </div>

                <div
                  className="item2 imgs"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Img fluid={data.leaf2.childImageSharp.fluid} />
                </div>

                <div
                  className="item3 imgs"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Img fluid={data.leaf3.childImageSharp.fluid} />
                </div>
              </div>
              <div class="columns ">
                <div
                  className="item4 imgs"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Img fluid={data.leaf4.childImageSharp.fluid} />
                </div>

                <div
                  className="item5 imgs "
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Img fluid={data.leaf5.childImageSharp.fluid} />
                </div>
                <div
                  className="item6 imgs"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Img fluid={data.leaf6.childImageSharp.fluid} />
                </div>
                <div
                  className="item7 imgs"
                  data-sal-duration="1200"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-bounce"
                >
                  <Img fluid={data.leaf7.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
        </SRLWrapper>
      </div>
    </Layout>
  )
}
export default Compost
