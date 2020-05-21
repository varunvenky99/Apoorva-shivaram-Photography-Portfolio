import React from "react"
import Compochi from "../components/Compochi"
import SimpleReactLightbox from "simple-react-lightbox"
import { Helmet } from "react-helmet"
function Apps() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chicago</title>
        <link rel="canonical" href="https://apoorvashivaram.com/chicago" />
      </Helmet>
      <SimpleReactLightbox>
        <Compochi />
      </SimpleReactLightbox>
    </div>
  )
}

export default Apps
