import React, { useState, useEffect, useRef } from "react";
import "./WarpDrive.css"; // Make sure to create this CSS file with the styles provided
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import AudioPlayer from "./Audio";
const WarpDrive = () => {
  const [warpActive, setWarpActive] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [backgroundImage, setBackgroundImage] = useState(
    "../public/blue-space-4.jpg"
  );

  const warpContainerRef = useRef(null);
  const flashRef = useRef(null);
  const starsRef = useRef([]);
  const speedRef = useRef(0.5);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    createStars();
    animateStars();
    return () => {
      starsRef.current.forEach((star) => star.remove());
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const createStar = () => {
    const star = document.createElement("div");
    star.className = "star";

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
    starsRef.current = Array(300)
      .fill()
      .map(() => {
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

    starsRef.current.forEach((star) => {
      let z = parseFloat(
        star.style.transform.match(/translateZ\((.*?)px\)/)[1]
      );
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
  function toggleMenu() {
    const buttonList = document.getElementById('button-list');
    buttonList.classList.toggle('hidden');
  }
  
  const handleButtonClick = (buttonName) => {
    setWarpActive((prevWarpActive) => {
      const newWarpActive = !prevWarpActive;
      speedRef.current = newWarpActive ? 20 : 0.5;
      if (newWarpActive) {
        setTimeout(() => {
          flash.classList.add("active");

          setTimeout(() => {
            console.log("Arrived at destination!");

            setWarpActive(false); // Warp ends here

            flash.classList.remove("active");
            setCurrentPage(buttonName);
            switch (buttonName) {
              case "Home":
                setBackgroundImage("../public/blue-space-4.jpg");
                break;
              case "About":
                setBackgroundImage("../public/about.jpg"); // Set your About background image here
                break;
              case "Projects":
                setBackgroundImage("../public/project.jpeg"); // Set your Projects background image here
                break;
              case "Contact":
                setBackgroundImage("../public/contact.jpg"); // Set your Contact background image here
                break;
              default:
                setBackgroundImage("../public/blue-space-4.jpg");
                break;
            }
          }, 450);
        }, 1500);
      } else {
        setCurrentPage(buttonName); // If not warping, change the page directly
        switch (buttonName) {
          case "Home":
            setBackgroundImage("../public/blue-space-4.jpg");
            break;
          case "About":
            setBackgroundImage("../public/about.jpg"); // Set your About background image here
            break;
          case "Projects":
            setBackgroundImage("../public/project.jpeg"); // Set your Projects background image here
            break;
          case "Contact":
            setBackgroundImage("../public/contact.jpg"); // Set your Contact background image here
            break;
          default:
            setBackgroundImage("../public/blue-space-4.jpg");
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
      <div
        id="space"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          position: "fixed",
          perspective: "500px",
        }}
      >
        <div id="warpContainer" ref={warpContainerRef}></div>
      </div>
      {/* --------------------------------------------------------------------------------------------------------------------- */}

        <button
          id="toggle-menu"
          className="flex justify-end items-end fixed lg:hidden none"
          onClick={toggleMenu}
        >
          <img src="/menu.svg" alt="Menu Icon" className="button-icon" />
        </button>
      <div
        id="left1"
        className="flex flex-col items-center fixed right-5  top-1/2 transform -translate-y-1/2 space-y-6 gap-2.5 px-1 py-4 "
      >

        {/* Button list (hidden by default on small screens) */}
        <div
          id="button-list"
          className="hidden lg:flex flex-col items-center space-y-6 gap-2.5"
        >
          <button
            id="top-left"
            className="neon-button"
            onClick={() => handleButtonClick("Home")}
          >
            <img
              src="./tabler_home.svg"
              alt="Home Icon"
              className="button-icon"
            />
            <span className="button-text">Home</span>
          </button>

          <button
            id="top-right"
            className="neon-button"
            onClick={() => handleButtonClick("About")}
          >
            <img src="./about.svg" alt="About Icon" className="button-icon" />
            <span className="button-text">About</span>
          </button>

          <button
            id="bottom-left"
            className="neon-button"
            onClick={() => handleButtonClick("Projects")}
          >
            <img
              src="./projects.svg"
              alt="Project Icon"
              className="button-icon"
            />
            <span className="button-text">Projects</span>
          </button>

          <button
            id="bottom-right"
            className="neon-button"
            onClick={() => handleButtonClick("Contact")}
          >
            <img
              src="./contact.svg"
              alt="Contact Icon"
              className="button-icon"
            />
            <span className="button-text">Contact</span>
          </button>
        </div>
        {/* <button id="top-left" className='neon-button' onClick={() => handleButtonClick('Home')}>
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
        </button> */}
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------- */}

      <div
        id="left"
        className="flex flex-col items-center fixed left-5 top-1/2 transform -translate-y-1/2 space-y-6 z-100 cursor-pointer gap-2.5"
      >
        <a href="https://linkedin.com/in/ali-bo">
          <img src="./linked.svg" alt="Home Icon" />
        </a>

        <a href="https://github.com/alix2i0">
          <img src="./github.svg" alt="About Icon" />
        </a>

        <a href="https://twitter.com/alibounkhila">
          <img src="./hackerrank.svg" alt="Projects Icon" />
        </a>

        <a href="https://www.hackerrank.com/profile/alibounkhila">
          <img src="./twitter.svg" alt="Contact Icon" />
        </a>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
      {/* <div className="test1">{<AudioPlayer />}</div> */}

      {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
      <div className="fixed w-full h-screen z-10 flex justify-center text-white">
        {currentPage === "Home" && <Home />}
        {currentPage === "About" && <About />}
        {currentPage === "Projects" && <Projects />}
        {currentPage === "Contact" && <Contact />}
      </div>
    </div>
  );
};

export default WarpDrive;
