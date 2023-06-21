import React, {useRef} from "react"

import exampleimage from "../../assets/example-image.svg"
import Text from "./Text"
import TextField from '@material-ui/core/TextField';

import "./Content.scss"

function Who() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
      <div className="who-content" id="Who">
        <div style={{width: '50%', height: '600px' }}>
          <Text click={() => handleClick()}/>
        </div>
        <div style={{height: '600px', width: '50%', display: 'flex', alignItems: 'center'}}>
          <img src={exampleimage} className="image-who" alt="imagem de quem é as minervas" />
        </div>
      </div>
      
  )
}

export default Who
