import React from "react";
import Particles from "react-particles-js";

const ParticleBg = () => {
    return (
        <Particles
            className="canv"
            params={
                {
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 2
                        },
                        "color": {
                            "value": "#4A4A4A"
                        },
                        "links": {
                            "distance": 150,
                            "color": "#4A4A4A",
                            "enable": true,
                            "opacity": 0.5,
                            "width": 1,
                        },
                        "move": {
                            "speed": 0.3,
                        },
                    },
                    "interactivity": {
                        "detect_on": "window", 
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }
            }
        />
    )
}

export default ParticleBg