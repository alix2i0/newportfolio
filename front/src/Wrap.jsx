import React, { useState, useEffect, useRef } from 'react';
import './WarpDrive.css'; // Make sure to create this CSS file with the styles provided
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const WarpDrive = () => {
  const [warpActive, setWarpActive] = useState(false);
//   const [buttonText, setButtonText] = useState('Engage Warp Drive');
  const [currentPage, setCurrentPage] = useState('Home');
  const [backgroundImage, setBackgroundImage] = useState('../public/blue-space-4.jpg');


  const warpContainerRef = useRef(null);
  const flashRef = useRef(null);
  const starsRef = useRef([]);
  const speedRef = useRef(0.5);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    createStars();
    // if (warpContainerRef.current) {
    //     starsRef.current = Array.from({ length: 300 }, () =>
    //       createStar(warpContainerRef.current)
    //     );
    //   }
    animateStars();
    return () => {
        starsRef.current.forEach((star) => star.remove());
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    // return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  const createStar = () => {
    const star = document.createElement('div');
    star.className = 'star';
    
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const startZ = Math.random() * 1500 - 750;
    
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;
    star.style.transform = `translateZ(${startZ}px)`;
    
    return star;
  };

  const createStars = () => {
    starsRef.current = Array(32).fill().map(() => {
      const star = createStar();
      warpContainerRef.current.appendChild(star);
      return star;
    });
  };

  const animateStars = () => {
    const targetSpeed = warpActive ? 20 : 0.5;
    if (warpActive && speedRef.current < targetSpeed) {
      speedRef.current += 0.2;
    } else if (!warpActive && speedRef.current > targetSpeed) {
      speedRef.current -= 0.2;
    }

    starsRef.current.forEach(star => {
      let z = parseFloat(star.style.transform.match(/translateZ\((.*?)px\)/)[1]);
      z -= warpActive ? speedRef.current : -speedRef.current;
      star.style.opacity = (1500 + z) / 1500;
      
      if (z > 750) {
        z = -750;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
      } else if (z > 750) {
        z = -750;
      }
      
      star.style.transform = `translateZ(${z}px)`;
    });
    
    animationFrameRef.current = requestAnimationFrame(animateStars);
  };

//   const handleWarpButtonClick = () => {
//     setWarpActive(!warpActive);
//     setButtonText(warpActive ? 'Engage Warp Drive' : 'Disengage Warp Drive');
    
//     if (!warpActive) {
//       setTimeout(() => {
//         flashRef.current.classList.add('active');
//         setTimeout(() => {
//           console.log('Arrived at destination!');
//           setWarpActive(false);
//           flashRef.current.classList.remove('active');
//           setButtonText('Engage Warp Drive');
//         }, 500);
//       }, 3000);
//     }
//   };
// const handleWarpButtonClick = () => {
//     setWarpActive((prev) => !prev);
    
//     speedRef.current = warpActive ? 20 : 0.5; // Reset speed when toggling
//     if (warpActive) {
//         setTimeout(() => {
//           // Navigate or update content after 3 seconds of warp
//           // window.location.href = 'new-page.html';
//             flash.classList.add('active');
//             setTimeout(() => {
//           console.log('Arrived at destination!');
//         //   warpActive = false;
//             setWarpActive((prev) => !prev);
//             flash.classList.remove('active');
//             // warpButton.textContent = 'Engage Warp Drive';
//         }, 400);
//         }, 1500);
//       }
//   };
const handleButtonClick = (buttonName) => {
  setWarpActive((prevWarpActive) => {
    const newWarpActive = !prevWarpActive;
    
    // Update speedRef based on the new warpActive value
    speedRef.current = newWarpActive ? 20 : 0.5;

    // Check if warpActive is true (warp engaged) and handle the animation logic
    if (newWarpActive) {
      setTimeout(() => {
        // Trigger flash effect
        flash.classList.add('active');

        setTimeout(() => {
          console.log('Arrived at destination!');
          
          // Deactivate warp after the timeout
          setWarpActive(false); // Warp ends here
          
          flash.classList.remove('active');
          setCurrentPage(buttonName);
          switch (buttonName) {
            case 'Home':
              setBackgroundImage('../public/blue-space-4.jpg');
              break;
            case 'About':
              setBackgroundImage('../public/about.jpg'); // Set your About background image here
              break;
            case 'Projects':
              setBackgroundImage('../public/project.jpeg'); // Set your Projects background image here
              break;
            case 'Contact':
              setBackgroundImage('../public/contact.jpg'); // Set your Contact background image here
              break;
            default:
              setBackgroundImage('../public/blue-space-4.jpg');
              break;
          }
        }, 450);
      }, 1500);
    } else {
      setCurrentPage(buttonName); // If not warping, change the page directly
      switch (buttonName) {
        case 'Home':
          setBackgroundImage('../public/blue-space-4.jpg');
          break;
        case 'About':
          setBackgroundImage('../public/about.jpg'); // Set your About background image here
          break;
        case 'Projects':
          setBackgroundImage('../public/project.jpeg'); // Set your Projects background image here
          break;
        case 'Contact':
          setBackgroundImage('../public/contact.jpg'); // Set your Contact background image here
          break;
        default:
          setBackgroundImage('../public/blue-space-4.jpg');
          break;
      }
    }

    return newWarpActive; // Toggle warpActive
  });

  console.log(`${buttonName} clicked`);
};


  return (
    <div>
    {/* <h1>hello</h1> */}
    <div id="flash" ref={flashRef}></div>
      <div id="space" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            position: 'fixed',
            perspective: '500px',
          }}>
        <div id="warpContainer" ref={warpContainerRef}></div>
      </div>
    {/* <nav id="warpButton" className='grid grid-cols-2 gap-4 p-4 content-between'> */}
    {/* <nav id="warpButton" className='absolute top-0 left-0 right-0 flex justify-between p-4'> */}
      {/* <button className='text-white py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded' onClick={() => handleButtonClick('Home')}>Home</button>
      <button className='text-white py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded' onClick={() => handleButtonClick('About')}>About</button>
      <button className='text-white py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded' onClick={() => handleButtonClick('Projects')}>Projects</button>
      <button className='text-white py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded' onClick={() => handleButtonClick('Contact')}>Contact</button> */}
      {/* <button id="top-left" className="neon-button sm:-top-20" onClick={() => handleButtonClick('Home')}><img src="./tabler_home.svg" alt="Home Icon" />Home</button>
      <button id="top-right" className="neon-button" onClick={() => handleButtonClick('About')}><img src="./about.svg" alt="About Icon" />About</button>
      <button id="bottom-left" className="neon-button bott" onClick={() => handleButtonClick('Projects')}><img src="./projects.svg" alt="Project Icon" />Projects</button>
      <button id="bottom-right" className="neon-button bott" onClick={() => handleButtonClick('Contact')}><img src="./contact.svg" alt="Contact Icon" />Contact</button> */}
      <div id="left" className='flex flex-col items-center fixed right-5  top-1/2 transform -translate-y-1/2 space-y-6 '>
        <button id="top-left" className='neon-button' onClick={() => handleButtonClick('Home')}>
          <img src="./tabler_home.svg" alt="Home Icon" class="button-icon" />
          <span class="button-text">Home</span>
        </button>
        
        <button id="top-right" className='neon-button' onClick={() => handleButtonClick('About')}>
          <img src="./about.svg" alt="About Icon" class="button-icon" />
          <span class="button-text">About</span>
        </button>
        
        <button id="bottom-left" className='neon-button' onClick={() => handleButtonClick('Projects')}>
          <img src="./projects.svg" alt="Project Icon" class="button-icon" />
          <span class="button-text">Projects</span>
        </button>
        
        <button id="bottom-right" className='neon-button' onClick={() => handleButtonClick('Contact')}>
          <img src="./contact.svg" alt="Contact Icon" class="button-icon" />
          <span class="button-text">Contact</span>
        </button>
      </div>

      <div id='left' className='flex flex-col items-center fixed left-5 top-1/2 transform -translate-y-1/2 space-y-6 z-100 cursor-pointer'>
      <a href="https://linkedin.com/in/ali-bo" >
          <img src="./linked.svg" alt="Home Icon" />
        </a>

        <a href="https://github.com/alix2i0" >
          <img src="./github.svg" alt="About Icon" />
        </a>

        <a href="https://twitter.com/alibounkhila" >
          <img src="./hackerrank.svg" alt="Projects Icon" />
        </a>

        <a href="https://www.hackerrank.com/profile/alibounkhila" >
          <img src="./twitter.svg" alt="Contact Icon" />
        </a>
      </div>

    {/* </nav> */}
    {/* <button id="warpButton" onClick={() => handleButtonClick('Warp Drive')}>Engage Warp Drive</button> */}
      <div className='fixed w-full h-screen z-10 flex justify-center text-white'>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'About' && <About />}
        {currentPage === 'Projects' && <Projects />}
        {currentPage === 'Contact' && <Contact />}
      </div>
  </div>
  );
};

export default WarpDrive;