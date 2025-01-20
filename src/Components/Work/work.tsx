import React from "react";
import NextJsIcon from "../../Assets/nextjs.svg";
import ReactJsIcon from "../../logo.svg";
import NestJsIcon from "../../Assets/nestjs.svg";
import OpenaiIcon from "../../Assets/openai.svg";
import SpeakerIcon from "../../Assets/speaker.svg";

const projectList = [
  {
    title: "Engame -Subscription-Based Survey Tool",
    imageUrl: NextJsIcon,
    description:
      "Built a web application using Next.js to offer clients to embed pre-developed survey widgets into their custom surveys. Integrated subscription management systems and features for clients to preview or trial the survey tool before purchasing. Ensured data security by implementing hashing algorithms.",
  },
  {
    title: "Research Gearbox - Video Analyzer Dashboard",
    imageUrl: ReactJsIcon,
    description:
      "Designed and developed survey data analysis web app using React.js and Nest.js, enabling clients to evaluate user feedback or rating on video content. Created a secure authentication services using JWT access/refresh tokens and also integerated role-based access control, ensuring users can only access data based on their roles. Developed advanced data retrieval features using MongoDB aggregation for detailed analysis.",
  },
  {
    title: "Data Pilot - Survey Automation",
    imageUrl: NestJsIcon,
    description:
      "Worked on a project Data Pilot, a scalable backend for survey automation using Nest js, leveraging the Playwright library for automation. Designed to support various survey formats, enabling seamless automation across multiple platforms.",
  },
  {
    title: "Speak Survey Plugin - Voice-enabled Survey Solution",
    imageUrl: SpeakerIcon,
    description:
      "Developed Speak Survey Plugin, a voice-enabled survey solution using vanilla JavaScript, allowing users to complete surveys via speech. Created a Node.js APIs for text-to-speech and speech-to-text, leveraging OpenAI text-to-speech and speech recognition modules. Made the plugin compatible with survey platforms like Confirmit, Questback, Decipher, and Forsta.",
  },
  {
    title: "Smart Probe - Plugin for survey",
    imageUrl: OpenaiIcon,
    description:
      "Developed Smart Probe, a plugin that generates follow-up questions based on user responses. It is created using OpenAI Module. Analyzed survey questions and user responses to evaluate user sentiment and generated relevant probe questions.",
  },
];

function Work() {
  return (
    <>
      <div className="px-10 pt-5 min-h-[calc(100vh-84px)]">
        <div className="font-semibold">
          Work :{" "}
          <span className="font-medium text-sm">
            Projects I've worked on at the company
          </span>
          <div className="w-7 h-0.5 bg-red-600"></div>
        </div>
        <div className="flex flex-wrap gap-4 flex-col md:flex-row mt-4">
          {projectList.map((data) => (
            <>
              <div className="flex flex-1 basis-1/4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100   ">
                <img
                  className="py-2 w-20 h-20 md:h-20 md:w-20"
                  src={data.imageUrl}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-600 ">
                    {data.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Work;
