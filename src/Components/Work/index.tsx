import React from "react";
import NextJsIcon from "../../Assets/nextjs.svg";
import ReactJsIcon from "../../logo.svg";
import NestJsIcon from "../../Assets/nestjs.svg";
import OpenaiIcon from "../../Assets/openai.svg";
import SpeakerIcon from "../../Assets/speaker.svg";
import NestImg from "../../Assets/nest-og.png";
import NextImg from "../../Assets/next-js.png";
import Illustration from "../../Assets/programmer2.svg";

const projectList = [
  {
    title: "E-commerce - Subscription-Based Web App",
    imageUrl: NextJsIcon,
    description:
      "Built a web application using Next.js to offer clients to embed pre-developed survey widgets into their custom surveys. Integrated subscription management systems and features for clients to preview or trial the survey tool before purchasing. Ensured data security by implementing hashing algorithms.",
    badge: [
      "Next Js",
      "MongoDb",
      "TypeScript",
      "HTML",
      "CSS",
      "JWT",
      "Docker",
      "Docker Compose",
    ],
    url: "",
  },
  {
    title: "Video Analyzer Dashboard",
    imageUrl: ReactJsIcon,
    description:
      "Designed and developed survey data analysis web app using React.js and Nest.js, enabling clients to evaluate user feedback or rating on video content. Created a secure authentication services using JWT access/refresh tokens and also integerated role-based access control, ensuring users can only access data based on their roles. Developed advanced data retrieval features using MongoDB aggregation for detailed analysis.",
    badge: [
      "React Js",
      "Node Js",
      "Nest Js",
      "TypeScript",
      "Express Js",
      "MongoDb",
      "Material UI",
      "JWT",
      "Docker",
      "Docker Compose",
    ],
    url: "",
  },
  {
    title: "Survey Automation",
    imageUrl: NestJsIcon,
    description:
      "Worked on a project Data Pilot, a scalable backend for survey automation using Nest js, leveraging the Playwright library for automation. Designed to support various survey formats, enabling seamless automation across multiple platforms.",
    badge: [
      "React Js",
      "Node Js",
      " Nest Js",
      "Express Js",
      "MongoDb",
      "Tailwind CSS",
      "Docker",
    ],
    url: "",
  },

  {
    title: "Speak Plugin - Voice-enabled Survey Solution",
    imageUrl: SpeakerIcon,
    description:
      "Developed Speak Survey Plugin, a voice-enabled survey solution using vanilla JavaScript, allowing users to complete surveys via speech. It seamlessly integrates with survey platforms to read questions aloud and capture responses through speech interpretation. Made the plugin compatible with survey platforms like Confirmit, Questback, Decipher, and Forsta.",
    badge: [
      " OpenAI",
      "Socket",
      "Node Js",
      "Nest Js",
      "Express Js",
      "MongoDb",
      "Tailwind CSS ",
    ],
    url: "",
  },
  {
    title: "Smart Probe - Plugin for survey",
    imageUrl: OpenaiIcon,
    description:
      "Developed Smart Probe, a advanced plugin that generates real time follow-up questions for survey based on user responses. It is created using OpenAI Module. Analyzed survey questions and user responses to evaluate user sentiment and generated relevant probe questions.",
    badge: [" OpenAI", "Node Js"],
    url: "",
  },
];
//min-h-[calc(100vh-84px)]
function Work() {
  return (
    <>
      <div className="px-10 pt-5 ">
        <div className="font-semibold">
          Work :{" "}
          <span className="font-medium text-sm">
            Projects I've worked on at the company
          </span>
          <div className="w-7 h-0.5 bg-red-600"></div>
        </div>
        <div className="flex bg-white border-gray-200 mt-2   ">
          <div className="flex-1 p-4 leading-normal">
            {projectList.map((obj) => (
              <>
                <details className="p-2 cursor-pointer ">
                  <summary>
                    <span className="mb-2 lg:text-2xl md:text-xl text-xs font-bold tracking-tight text-slate-600 ">
                      {obj.title}
                    </span>
                  </summary>
                  {obj.url == "" ? (
                    <p className="mb-3 p-4  font-normal text-gray-700 dark:text-gray-400 cursor-pointer rounded-lg shadow-[0_7px_29px_0px_rgba(100,100,111,0.3)] ">
                      {obj.description}
                      <div>
                        {obj.badge.map((txt) => (
                          <>
                            <span className="bg-purple-100 text-purple-600 text-xs font-medium me-2 px-2.5 py-0.5 mr-2 rounded">
                              {txt}
                            </span>{" "}
                          </>
                        ))}
                      </div>
                    </p>
                  ) : (
                    <a href={obj.url}>
                      <p className="mb-3 p-4 font-normal text-gray-700 dark:text-gray-400 cursor-pointer rounded-lg shadow-[0_7px_29px_0px_rgba(100,100,111,0.3)] ">
                        {obj.description}
                        <div>
                          {obj.badge.map((txt) => (
                            <>
                              <span className="bg-purple-100 text-purple-600 text-xs font-medium me-2 px-2.5 py-0.5 mr-2 rounded">
                                {txt}
                              </span>{" "}
                            </>
                          ))}
                        </div>
                      </p>
                    </a>
                  )}
                </details>
              </>
            ))}
          </div>
          <div className="flex-1 hidden lg:block">
            <img className="w-10/12" src={Illustration} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;

// function Work() {
//   return (
//     <>
//       <div className="min-h-[calc(100vh-84px)]">
//         <div className="p-5 font-semibold">
//           Work :{" "}
//           <span className="font-medium text-sm">
//             Projects I've worked on at the company
//           </span>
//           <div className="w-7 h-0.5 bg-red-600"></div>
//         </div>
//         <div className="flex">
//           <div className="flex-1">
//             <div className="p-5 border-r-2 relative cursor-pointer hover:shadow-[0_7px_29px_0px_rgba(100,100,111,0.3)] hover:rounded-md">
//               <div className="w-full after:content-[''] after:absolute after:right-[-10px] after:top-[45%] after:[background-image:url('/src/Assets/nextjs.svg')] after:w-5 after:h-5 after:rounded-lg">
//                 Built a web application using Next.js to offer clients to embed
//                 pre-developed survey widgets into their custom surveys.
//                 Integrated subscription management systems and features for
//                 clients to preview or trial the survey tool before purchasing.
//                 Ensured data security by implementing hashing algorithms.
//               </div>
//             </div>

//             <div className="p-5 border-r-2 relative mt-14 cursor-pointer hover:shadow-[0_7px_29px_0px_rgba(100,100,111,0.3)] hover:rounded-md">
//               <div className="w-full after:content-[''] after:absolute after:right-[-10px] after:top-[45%] after:[background-image:url('/src/Assets/logo.svg')] after:w-5 after:h-5 after:rounded-lg">
//                 Designed and developed survey data analysis web app using
//                 React.js and Nest.js, enabling clients to evaluate user feedback
//                 or rating on video content. Created a secure authentication
//                 services using JWT access/refresh tokens and also integerated
//                 role-based access control, ensuring users can only access data
//                 based on their roles. Developed advanced data retrieval features
//                 using MongoDB aggregation for detailed analysis.
//               </div>
//             </div>
//             <div className="p-5 border-r-2 relative mt-20 cursor-pointer hover:shadow-[0_7px_29px_0px_rgba(100,100,111,0.3)] hover:rounded-md">
//               <div className="w-full after:content-[''] after:absolute after:right-[-10px] after:top-[45%] after:[background-image:url('/src/Assets/openai.svg')] after:w-5 after:h-5 after:rounded-lg">
//                 Developed Smart Probe, a plugin that generates follow-up
//                 questions based on user responses. It is created using OpenAI
//                 Module. Analyzed survey questions and user responses to evaluate
//                 user sentiment and generated relevant probe questions.
//               </div>
//             </div>
//           </div>

//           <div className="flex-1">
//             <div className="p-5 relative mt-24 cursor-pointer hover:shadow-[0_7px_29px_0px_rgba(100,100,111,0.3)] hover:rounded-md">
//               <div className="w-full before:content-[''] before:absolute before:left-[-10px] before:top-[45%] before:[background-image:url('/src/Assets/nestjs.svg')] before:bg-repeat-round before:w-5 before:h-5 before:rounded-lg">
//                 Worked on a project Data Pilot, a scalable backend for survey
//                 automation using Nest js, leveraging the Playwright library for
//                 automation. Designed to support various survey formats, enabling
//                 seamless automation across multiple platforms.
//               </div>
//             </div>
//             <div className="p-5 relative mt-24 cursor-pointer hover:shadow-[0_7px_29px_0px_rgba(100,100,111,0.3)] hover:rounded-md">
//               <div className="w-full before:content-[''] before:absolute before:left-[-10px] before:top-[45%] before:bg-repeat-round before:[background-image:url('/src/Assets/speaker.svg')] before:w-5 before:h-5 before:rounded-lg">
//                 Developed Speak Survey Plugin, a voice-enabled survey solution
//                 using vanilla JavaScript, allowing users to complete surveys via
//                 speech. Created a Node.js APIs for text-to-speech and
//                 speech-to-text, leveraging OpenAI text-to-speech and speech
//                 recognition modules. Made the plugin compatible with survey
//                 platforms like Confirmit, Questback, Decipher, and Forsta.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Work;
