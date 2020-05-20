import React from "react"
import Compost from "../components/Compost"
import SimpleReactLightbox from "simple-react-lightbox"

function Apps() {
  return (
    <div className="App">
      <SimpleReactLightbox>
        <Compost />
      </SimpleReactLightbox>
    </div>
  )
}

export default Apps
