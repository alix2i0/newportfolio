// Import necessary React hooks and assets
import React, { useState, useEffect } from 'react';

const Home = () => {
  // State variables for visibility and countdown timer
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(7);

  // Show message with a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Countdown logic to hide message after reaching 0
  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            setIsVisible(false); // Hide message after countdown reaches 0
            return 0; // Stop countdown at 0
          }
        });
      }, 1000); // Update countdown every second
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div
      className="flex justify-center items-center h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/path-to-your-background-image.jpg')",
      }}
    >
      {isVisible && (
        <div className="shadow-lg w-10/12 max-w-4xl backdrop-blur-md bg-white/10 rounded-3xl p-10 text-center animate-popup-expand">
          <h1 className="text-6xl font-bold text-white mb-4">
            Welcome to My Portfolio!
          </h1>
          <p className="text-xl text-white mb-6 font-semibold">
            I’m a Full Stack Web Developer with expertise in React, Node.js, and design.
          </p>
          <div className="flex justify-center mb-6">
            {/* Avatar Image */}
            <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img
                src="/cvimage1.png" // Replace with the actual path of your image
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-white text-lg">This message will disappear in {countdown} seconds...</p>
        </div>
      )}
    </div>
  );
};

export default Home;