import React, { useRef } from "react"

import exampleimage from "../../assets/example-image.svg"
import Text from "./Text"

import "./Content.scss"

function Net() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <div className="net-content">
        <Text click={() => handleClick()}  />
        <div style={{ width: '98vw', display: 'flex', justifyContent: 'center'}}>
        <div style={{border: 'solid 2xp red', width: '50%'}}>
          <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={exampleimage} className="line1" alt="example1" />
            <img src={exampleimage} className="line1" alt="example2" />
            <img src={exampleimage} className="line1" alt="example3" />
          </div>
          <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={exampleimage} className="line2" alt="example4" />
            <img src={exampleimage} className="line2" alt="example5" />
            <img src={exampleimage} className="line2" alt="example6" />
          </div>
          <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={exampleimage} className="line3" alt="example7" />
            <img src={exampleimage} className="line3" alt="example8" />
            <img src={exampleimage} className="line3" alt="example9" />
          </div>
        </div>

        </div>
        


      </div>
      {/* <div ref={ref}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div> */}
    </div>
  )
}

export default Net
