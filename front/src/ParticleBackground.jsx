// import React, { useEffect } from 'react';
// import particlesJS from '@tsparticles/react';

// const ParticleBackground = () => {
//     useEffect(() => {
//         particlesJS("spacec", {
//             "particles": {
//                 "number": {
//                     "value": 50,
//                     "density": {
//                         "enable": true,
//                         "value_area": 500
//                     }
//                 },
//                 "color": {
//                     "value": "#fff"
//                 },
//                 "opacity": {
//                     "value": 1,
//                     "anim": {
//                         "enable": true,
//                         "speed": 8,
//                         "opacity_min": 0.4,
//                         "sync": false
//                     }
//                 },
//                 "shape": {
//                     "type": "circle"
//                 },
//                 "size": {
//                     "value": 5,
//                     "random": true
//                 },
//                 "line_linked": {
//                     "enable": false
//                 },
//                 "move": {
//                     "enable": true,
//                     "speed": 3,
//                     "direction": "right",
//                     "straight": true
//                 }
//             },
//             "interactivity": {
//                 "detect_on": "canvas",
//                 "events": {
//                     "onhover": {
//                         "enable": false
//                     },
//                     "onclick": {
//                         "enable": false
//                     }
//                 }
//             }
//         });
//     }, []);

//     return (
//         <div id="spacec" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
//     );
// };


import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const ParticleBackground = (props) => {
    
    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
      setInit(true);
    });
  }, []);
  
  const particlesLoaded = (container) => {
      console.log(container);
    };
    
    
    const options = useMemo(
    () => ({
        background: {
            color: {
                value: "#1E2F97",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "repulse",
                },
                onHover: {
                    enable: true,
                    mode: 'grab',
                },
            },
            modes: {
                push: {
                    distance: 200,
                    duration: 15,
                },
                grab: {
                    distance: 150,
          },
        },
      },
      particles: {
          color: {
              value: "#FFFFFF",
            },
            links: {
                color: "#FFFFFF",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
            enable: true,
        },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
}),
[],
);


return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

// export default ParticlesComponent;
export default ParticleBackground;