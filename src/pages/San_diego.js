import React from "react"
import MyComponent from "../components/Composan"
import SimpleReactLightbox from "simple-react-lightbox"
import { Helmet } from "react-helmet"
function Apps() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>San Diego</title>
        <link rel="canonical" href="https://apoorvashivaram.com/San_diego" />
      </Helmet>
      <SimpleReactLightbox>
        <MyComponent />
      </SimpleReactLightbox>
    </div>
  )
}

export default Apps
