import React from 'react'
import "./Style.css"

function CSSTypes() {

    let InternalCSSData = {
        backgroundColor: "violet",
        color: "maroon",
        padding: "30px"
    }

  return (
    <div>
        <h1>This is Using CSS Components</h1>

        {/* For using Inline CSS, always we have to write properties in {Key:"value"} */}
        <h1 style={{background:"Blue",color:"gold", padding:"30px"}}>This is Inline CSS</h1>

        {/* For using Internal CSS, First we have to declare an object for css property and then call it using style attribute in a tag */}
        <h1 style={InternalCSSData}>This is Internal CSS</h1>

        {/* For using External CSS, we have to import the css file in the component and then use the className attribute */}
        <h1 className='ExternalCSS'>This is External CSS</h1>



    </div>
  )
}

export default CSSTypes
