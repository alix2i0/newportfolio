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
        <div className="shadow-md w-10/12 max-w-3xl backdrop-blur-md bg-white/10 rounded-3xl p-8 text-center animate-popup-expand">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to My Portfolio!
          </h1>
          <p className="text-lg text-white mb-6">
            I’m a Full Stack Web Developer with expertise in React, Node.js, and design.
          </p>
          <div className="flex justify-center mb-4">
            {/* Placeholder for avatar image */}
            <div className="w-24 h-24 bg-blue-500 rounded-full overflow-hidden shadow-lg">
              {/* Insert your avatar or any image here */}
              <img
                src="/path-to-your-avatar-image.jpg"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-white text-sm">This message will disappear in {countdown}...</p>
        </div>
      )}
    </div>
  );
};

export default Home;