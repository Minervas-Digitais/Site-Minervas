import React, { useEffect, useState } from "react"
import "./Content.scss"
import Carousel1 from "./Gallery1"
import Carousel2 from "./Gallery2"
import TextEvent from "./Text"

function EventsContent() {
    const [transform, setTransform] = useState('rotate(-7.21deg)')

    useEffect(() => { // tira a rotação do slider na versão mobile
        const handleTransform = () =>  {
            
            if( window.innerWidth < 500){
                setTransform("")
            }
            if( window.innerWidth > 500){
                setTransform('rotate(-7.21deg)')
            }
            
        }
        handleTransform()
        window.addEventListener('resize', handleTransform);
        return () => {
            window.removeEventListener('resize', handleTransform);
        }
    }, [])

    return (
        <div className="events-container-background" id="Events">
            <div className="events-content">
                <TextEvent />
                <div className="gallery-container">
                    <div className="gallery-transform" style={{transform: transform}} >
                        <Carousel1 />
                        <Carousel2 />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventsContent