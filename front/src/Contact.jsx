import React, { useState,useEffect } from "react";
import "./WarpDrive.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    // <div className="flex flex-col items-center justify-center h-full p-4">
    <div className="flex justify-center items-center h-screen w-4/5 lg:w-auto">
      {isVisible && (<div className="border shadow-sm w-full backdrop-blur-md rounded-3xl max-h-screen">
        <div className="flex flex-col p-3 px-8 pt-4 mb-8">
          {/* <div className='flex justify-between items-center'> */}

          <h1 className="text-4xl font-bold text-white mb-8 flex justify-center">Contact Me</h1>
          {/* <div className="p-6 px-8 py-6"> */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4 max-h-fit">
                <div>
                  <input
                    type="text"
                    className="flex h-10 w-full text-black px-4 py-3 text-sm rounded-md  "
                    // style={{borderRadius:"100px 20px / 50% 20%"}}
                    // style={{clipPath : 'polygon(25% 5%, 75% 5% ,100% 50%,75% 95% ,25% 95% ,0% 50%)'}}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="flex h-10 w-full text-black px-4 py-3text-sm rounded-md"
                    // style={{borderRadius:"100px 20px / 50% 20%"}}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-span-2">
                  <textarea
                    className="min-h-[12px] w-full px-4 py-3 text-black max-h-60"
                    style ={{borderRadius:"50% / 20px" ,height: "100px" }}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center"><button className="bg-black/60 rounded-md p-1" type="submit">Send</button></div>
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>)}
    </div>
  );
};

export default Contact;
