import React from "react"
import Compost from "../components/Compost"
import SimpleReactLightbox from "simple-react-lightbox"
import { Helmet } from "react-helmet"
function Apps() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>St. Paul</title>
        <link rel="canonical" href="https://apoorvashivaram.com/St_Paul" />
      </Helmet>
      <SimpleReactLightbox>
        <Compost />
      </SimpleReactLightbox>
    </div>
  )
}

export default Apps
