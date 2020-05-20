import React from "react"
import MyComponent from "../components/Composan"
import SimpleReactLightbox from "simple-react-lightbox"

function Apps() {
  return (
    <div className="App">
      <SimpleReactLightbox>
        <MyComponent />
      </SimpleReactLightbox>
    </div>
  )
}

export default Apps
