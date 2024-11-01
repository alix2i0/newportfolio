import React,{useState,useEffect} from 'react';
import './WarpDrive.css';
const Projects = () => {
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
  const projects = [{
    title: "Project 1",
    description: "Description of project 1.",
    imageUrl: "ecom.jpg", // replace with your image URL
  },
  {
    title: "Project 2",
    description: "Description of project 2.",
    imageUrl: "ecom.jpg", // replace with your image URL
  },
  {
    title: "Project 3",
    description: "Description of project 3.",
    imageUrl: "ecom.jpg", // replace with your image URL
  },
  {
    title: "Project 4",
    description: "Description of project 4.",
    imageUrl: "ecom.jpg", // replace with your image URL
  // },
  // {
  //   title: "Project 5",
  //   description: "Description of project 5.",
  //   imageUrl: "ken.jpg", // replace with your image URL
  // },
  // {
  //   title: "Project 6",
  //   description: "Description of project 6.",
  //   imageUrl: "ken.jpg", // replace with your image URL
  // },
  // {
  //   title: "Project 7",
  //   description: "Description of project 4.",
  //   imageUrl: "ken.jpg", // replace with your image URL
  // },
  // {
  //   title: "Project 8",
  //   description: "Description of project 5.",
  //   imageUrl: "ken.jpg", // replace with your image URL
  // },
  // {
  //   title: "Project 9",
  //   description: "Description of project 6.",
  //   imageUrl: "ken.jpg", // replace with your image URL
  }]
  return (
    // <div className="flex justify-center items-center h-screen w-5/4">
    //   <div className=''>
    //     <h1>Projects Page</h1>
    //     <p>Here are some of our projects.</p>
    //   </div>
    // </div>
    // <div className="flex flex-col justify-center items-center h-screen w-4/5 mx-auto">
    //   <div className='text-center mb-8'>
    //     <h1>Projects Page</h1>
    //     <p>Here are some of our projects.</p>
    //   </div>
    //   {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
    //   <div className="overflow-auto h-96  w-full "> 
    //   {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
    //       <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto lg:grid-cols-auto gap-4">
    //         {projects.map((project, index) => (
    //           //   <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
    //           //     <img className="w-full" src={project.imageUrl} alt={project.title} />
    //           //     <div className="px-6 py-4">
    //           //       <div className="font-bold text-xl mb-2">{project.title}</div>
    //           //       <p className="text-gray-700 text-base">{project.description}</p>
    //           //     </div>
    //           //   </div>
    //           // ))}
    //           // <div class="card_stylings overflow-hidden h-full">
    //           //   <img src="projects/portfolio1.PNG" alt="portfolio img" class="w-full object-cover opacity-30 h-32 sm:h-48 md:h-64"/>
    //           //   <div id="arrow" class="py-2 px-6 card_stylings hover:-translate-y-10 transition-all ease-in-out duration-500"/>
    //           //     <div class="flex justify-between p-0 m-0 ">
    //           //       <h3 class="mr-2 underline italic font-semibold pt-2 text-2xl text-Snow leading-tight sm:leading-normal">
    //           //         <a href="https://www.agoda.com/" target="_blank" rel="noreferrer">Agoda</a></h3>
    //           //         </div><p class="text-xs text-LightGray font-normal">Hotels &amp; Homes, Flights, Airport transfer project is a comprehensive platform that offers accommodation options, flight bookings, and convenient transportation services for travelers.</p>
    //           //         <div class="text-sm flex flex-wrap gap-3 py-2">
    //           //           <span class="py-2 px-3 text-xs text-Snow bg-EveningBlack rounded-full">ReactJS</span>
    //           //           <span class="py-2 px-3 text-xs text-Snow bg-EveningBlack rounded-full">Core.js</span>
    //           //           <span class="py-2 px-3 text-xs text-Snow bg-EveningBlack rounded-full">Ant Design</span>
    //           //           <span class="py-2 px-3 text-xs text-Snow bg-EveningBlack rounded-full">TailwindCSS</span>
    //           //   </div>
    //           //   </div>
    //           //   </div>
    //           <div key={index} className="w-full bg-blue-600  justify-self-center border border-gray-700 rounded-lg shadow">
    //             <img className="w-full object-cover opacity-90 h-32 sm:h-48 md:h-64" src={project.imageUrl} alt={project.title} />
    //             <div className="py-2 px-6 bg-slate-800 rounded-xl hover:-translate-y-10 transition-all ease-in-out duration-500">
    //               <h3 className='mr-2 underline italic font-semibold pt-2 text-2xl text-Snow leading-tight sm:leading-normal'>
    //                 <a href='#' target='_blank'>
    //                   petcom
    //                 </a>
    //               </h3>
    //               {/* <div className="font-bold text-xl mb-2">{project.title}</div> */}
    //               <p className="text-gray-700 text-xs text-LightGray font-normal">{project.description}</p>
    //               <div className="text-sm flex flex-wrap gap-2 py-2">
    //                 <span className="text-xs text-Snow bg-EveningBlack rounded-full">ReactJS</span>
    //                 <span className="text-xs text-Snow bg-EveningBlack rounded-full">Core.js</span>
    //                 <span className="text-xs text-Snow bg-EveningBlack rounded-full">Ant Design</span>
    //                 <span className="text-xs text-Snow bg-EveningBlack rounded-full">TailwindCSS</span>
    //                 <span className="text-xs text-Snow bg-EveningBlack rounded-full">TailwindCSS</span>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //         {/* <div key={index} className="max-w-xs bg-blue-600  justify-self-center border border-gray-700 rounded-lg shadow">
    //               <img className="w-full rounded-lg " src={project.imageUrl} alt={project.title} />
    //               <div className="px-6 py-4">
    //                 <div className="font-bold text-xl mb-2">{project.title}</div>
    //                 <p className="text-gray-700 text-base">{project.description}</p>
    //               </div>
    //             </div>
    //           ))} */}
    //       </div>
    //   </div>
    // </div>
    <div className='flex  justify-center items-center'>
    {isVisible && (
      <div className="flex flex-col justify-center items-center h-screen w-4/5 mx-8 max-h-screen backdrop-blur-md animate-popup-expand">
    <div className="text-center mb-8 ">
    <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
    <p className="text-base sm:text-lg">Here are some of our projects.</p>
  </div>

  <div className="overflow-auto h-96 w-auto mx-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="w-full bg-blue-600 justify-self-center border border-gray-700 rounded-lg shadow">
          <img className="w-full object-cover h-32 sm:h-48 md:h-64" src={project.imageUrl} alt={project.title} />
          <div className="py-2 px-6 bg-slate-800 rounded-xl hover:-translate-y-10 transition-all ease-in-out duration-500">
            <h3 className="text-xl sm:text-2xl underline italic font-semibold pt-2 text-Snow">
              <a href="#" target="_blank">petcom</a>
            </h3>
            <p className="text-gray-700 text-xs text-LightGray font-normal">{project.description}</p>
            <div className="text-sm flex flex-wrap gap-2 py-2">
              <span className="text-xs text-Snow bg-EveningBlack rounded-full">ReactJS</span>
              <span className="text-xs text-Snow bg-EveningBlack rounded-full">Core.js</span>
              <span className="text-xs text-Snow bg-EveningBlack rounded-full">Ant Design</span>
              <span className="text-xs text-Snow bg-EveningBlack rounded-full">TailwindCSS</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
)}
</div>

  );
};

export default Projects;
