import React from "react"
import Compochi from "../components/Compochi"
import SimpleReactLightbox from "simple-react-lightbox"

function IndexPage() {
  return (
    <div className="App">
      <SimpleReactLightbox>
        <Compochi />
      </SimpleReactLightbox>
    </div>
  )
}

export default IndexPage
