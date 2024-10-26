// import React, { useEffect, useRef, useState } from "react";
// const Buttons = () => {
//   const [warpActive, setWarpActive] = useState(false);
//   const warpContainerRef = useRef(null);
//   const flashRef = useRef(null);
//   const warpButtonRef = useRef(null);
//   const stars = useRef([]);
//   const speedRef = useRef(0.5);
//   const animationFrameRef = useRef(null);

// useEffect(() => {
//   // Create stars
//   if (warpContainerRef.current) {
//     stars.current = Array.from({ length: 300 }, () =>
//       createStar(warpContainerRef.current)
//     );
//   }

//   // Start animation
//   animateStars();

//   // Cleanup on component unmount
//   return () => {
//     stars.current.forEach((star) => star.remove());
//     if (animationFrameRef.current) {
//       cancelAnimationFrame(animationFrameRef.current);
//     }
//   };
// }, [animationFrameRef]);

// useEffect(() => {
//     const targetSpeed = warpActive ? 20 : 0.5;
//     speedRef.current = targetSpeed;
//   }, [warpActive]);
//   useEffect(() => {
//     // Create stars
//     if (warpContainerRef.current) {
//       stars.current = Array.from({ length: 300 }, () =>
//         createStar(warpContainerRef.current)
//       );
//     }

//     // Animate stars
//     animateStars();

//     // Cleanup on component unmount
//     return () => {
//       stars.current.forEach((star) => star.remove());
//     };
//   }, []);

//   useEffect(() => {
//     // Handle button text and flash effect
//     if (warpButtonRef.current) {
//       warpButtonRef.current.textContent = warpActive
//         ? "Disengage Warp Drive"
//         : "Engage Warp Drive";
//     }

//     if (warpActive) {
//       const flashEl = flashRef.current;
//       const timeout = setTimeout(() => {
//         if (flashEl) flashEl.classList.add("active");
//         setTimeout(() => {
//           console.log("Arrived at destination!");
//           setWarpActive(false);
//           if (flashEl) flashEl.classList.remove("active");
//         }, 500);
//       }, 3000);

//       return () => clearTimeout(timeout);
//     }
//   }, [warpActive]);

//   const createStar = (container) => {
//     const star = document.createElement("div");
//     star.className = "star bg-white rounded-full absolute";

//     const size = Math.random() * 2 + 1;
//     star.style.width = `${size}px`;
//     star.style.height = `${size}px`;

//     const startX = Math.random() * window.innerWidth;
//     const startY = Math.random() * window.innerHeight;
//     const startZ = Math.random() * 1500 - 750;

//     star.style.left = `${startX}px`;
//     star.style.top = `${startY}px`;
//     star.style.transform = `translateZ(${startZ}px)`;

//     container.appendChild(star);
//     return star;
//   };

//   const animateStars = () => {
//   const targetSpeed = warpActive ? 20 : 0.5;
  
//   if (warpActive && speedRef.current < targetSpeed) {
//     speedRef.current += 0.2; // Gradually increase speed
//   } else if (!warpActive && speedRef.current > targetSpeed) {
//     speedRef.current -= 0.2; // Gradually decrease speed
//   }

//   stars.current.forEach((star) => {
//     let z = parseFloat(star.style.transform.match(/translateZ\((.*?)px\)/)[1]);

//     z += warpActive ? speedRef.current : -speedRef.current;
//     star.style.opacity = (1500 + z) / 1500;

//     if (z > 750) {
//       z = -750;
//       const x = Math.random() * window.innerWidth;
//       const y = Math.random() * window.innerHeight;
//       star.style.left = `${x}px`;
//       star.style.top = `${y}px`;
//     } else if (z < -750) {
//       z = 750;
//     }

//     star.style.transform = `translateZ(${z}px)`;
//   });

//   animationFrameRef.current = requestAnimationFrame(animateStars);
// };

//   const handleWarpButtonClick = () => {
//     setWarpActive((prev) => !prev);
//     speedRef.current = warpActive ? 20 : 0.5; // Reset speed when toggling
//   };
//   return (
    // start:
    // <div  className='flex justify-between items-center h-screen m-0 ' >
    //     <div className='flex flex-col space-y-4'>
    //         <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>111111</button>
    //         <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>222222</button>

    //     </div>
    //     <div className='flex flex-col space-y-4'>
    //         <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>44444444</button>
    //         <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>3333333</button>
    //     </div>
    // </div>
    // ends


//     <div className="h-screen flex overflow-hidden">
//       {/* Left Side */}
//       <div className="flex flex-col justify-center items-start space-y-4 w-1/2 p-4">
//         <button
//           ref={warpButtonRef}
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
//           onClick={handleWarpButtonClick}
//         >
//           Engage Warp Drive
//         </button>
//       </div>

//       {/* Right Side */}
//       <div className="flex flex-col justify-center items-end space-y-4 w-1/2 p-4">
//         <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//           44444444
//         </button>
//         <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//           3333333
//         </button>
//       </div>

//       {/* Animation Container */}
//       {/* <div
//         className="fixed w-full h-full bg-black perspective-500"
//         ref={warpContainerRef}
//       >
//         <div className="absolute w-full h-full transform-style-preserve-3d"></div>
//         <div
//           ref={flashRef}
//           className="fixed top-0 left-0 w-full h-full bg-white opacity-0 pointer-events-none transition-opacity ease-out duration-500 z-50"
//         ></div>
//       </div> */}
//     </div>
//   );
// };

// export default Buttons;


//this is the sconed edit :

// import React, { useEffect, useRef, useState } from "react";

// const Buttons = () => {
  
//   return (
//     <div className="h-screen flex overflow-hidden">
//         <div id="space">
//             <div id="warpContainer"></div>
//             <div id="flash"></div>
//         </div>
//         <button id="warpButton">Engage Warp Drive</button>
//     </div>
//   );
// };

// export default Buttons;


            // <div className="grid grid-cols-2 gap-4">
            //   <div className="space-y-2">
            //     <Label htmlFor="name" className="text-primary-foreground">
            //       Name
            //     </Label>
            //     <Input id="name" placeholder="Enter your name" />
            //   </div>
            //   <div className="space-y-2">
            //     <Label htmlFor="email" className="text-primary-foreground">
            //       Email
            //     </Label>
            //     <Input id="email" type="email" placeholder="Enter your email" />
            //   </div>
            // </div>