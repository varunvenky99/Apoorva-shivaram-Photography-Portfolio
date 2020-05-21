import React from "react"
import Compoturk from "../components/Compoturk"
// Import Simple React Lightbox
import SimpleReactLightbox from "simple-react-lightbox"
import { Helmet } from "react-helmet"

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Turkey</title>
        <link rel="canonical" href="http://apoorvashivaram.com/San_diego" />
      </Helmet>
      <SimpleReactLightbox>
        <Compoturk />
      </SimpleReactLightbox>
    </div>
  )
}

export default App
