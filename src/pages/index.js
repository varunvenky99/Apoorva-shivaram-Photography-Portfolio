import React from "react"
import Compochi from "../components/Compochi"
import SimpleReactLightbox from "simple-react-lightbox"
import { Helmet } from "react-helmet"
function IndexPage() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Apoorva Shivaram</title>
        <link rel="canonical" href="https://apoorvashivaram.com/contact" />
      </Helmet>
      <SimpleReactLightbox>
        <Compochi />
      </SimpleReactLightbox>
    </div>
  )
}

export default IndexPage
