import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(7);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCountdown(prev => {
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
    <div className="flex justify-center items-center h-screen w-10/12">
  {isVisible && (
    <div className="shadow-sm w-full backdrop-blur-md bg-white/8 rounded-3xl max-h-screen animate-popup-expand">
      <div className="flex flex-col space-y-1.5 p-6 px-8 pt-8">
        <h1 className="text-4xl font-bold text-white mb-8 flex justify-center">Welcome to My Portfolio!</h1>
        <p className="flex justify-center">This message will disappear in {countdown}...</p>
      </div>
    </div>
  )}
</div>

  );
};

export default Home;

