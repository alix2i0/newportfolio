import React, {useState,useEffect} from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [countdown, setCountdown] = useState(7);
  useEffect(() => {
    // Show the pop-up after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex justify-center items-center h-screen w-4/5">
       {isVisible && (
      <div className=" shadow-sm w-full backdrop-blur-md bg-white/8 rounded-3xl max-h-screen animate-popup-expand">
        <div className="flex flex-col space-y-1.5 p-6 px-8 pt-8">
      <h1 className="text-4xl font-bold text-white mb-8 flex justify-center">About Me</h1>
      <p className='text-center'>A highly energetic individual who is enthusiastic about learning new technologies, mastering acquired skills, and continuously enhancing capabilities. Adaptable to change, I build key competencies in autonomy and problem-solving, complemented by collaborative teamwork in multiple projects. These attributes make me a valuable asset in diverse job landscapes.</p>
    </div>
    </div>
       )}
    </div>
  );
};

export default About;
