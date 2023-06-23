import React, { useRef } from "react"
import "./Content.scss"
import Carousel1 from "./Gallery1"
import Carousel2 from "./Gallery2"
import TextEvent from "./Text"

function Events() {

    return (
        <div className="events-container">
            <TextEvent />
            <div className="gallery-container">
                <div className="gallery-transform" >
                    <Carousel1 />
                    <Carousel2 />
                </div>
            </div>




        </div>

    )
}
export default Events
