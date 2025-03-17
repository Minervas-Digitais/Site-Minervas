import React, {useRef} from "react";
import Text from "./Text";
import photo from "../../assets/group-photo.jpg"
import "./Content.scss";

function Who() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="who-content-background">
      <div className="who-content" id="Who">
        <div className="who-conteudo-esquerdo">
          <Text click={() => handleClick()}/>
        </div>
        <div className="who-conteudo-direito">
          <img src={photo} className="image-who" alt="imagem de quem é as minervas" />
        </div>
      </div>
    </div>
  )
}

export default Who
