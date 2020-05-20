import React from "react"
import Compochi from "../components/Compochi"
import SimpleReactLightbox from "simple-react-lightbox"

function Apps() {
  return (
    <div className="App">
      <SimpleReactLightbox>
        <Compochi />
      </SimpleReactLightbox>
    </div>
  )
}

export default Apps
