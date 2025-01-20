import React from "react";
import PlayAppIcon from "../../Assets/playoapp.svg";
import MusicPlayerIcon from "../../Assets/musicplayer.png";
import TextEditorIcon from "../../Assets/texteditor.png";

const projectList = [
  {
    title: "Playo App",
    imageUrl: PlayAppIcon,
    gitUrl: "https://github.com/aashishh121",
    badge: ["Node Js", "React Js", "TypeScript", "MongoDb", "Tailwind CSS"],
    description:
      "Developed Playo App, an event management web application enabling admins to create, update, and delete events. Implemented user features to view all events, manage personal events, and track pending events.",
  },
  {
    title: "Real-Time Document Collaboration Tool",
    imageUrl: TextEditorIcon,
    gitUrl: "https://github.com/aashishh121/collaborative-text-editor",
    badge: ["Socket.io", "Node Js", "React Js"],
    description:
      "Crafted a real-time collaborative text-editor to gain proficiency with Socket.io and WebSockettechnology. Implemented real-time functionality with Socket.io for seamless collaboration between users. Leveraged a Quill library for the rich text editor.",
  },
  {
    title: "Music Player",
    imageUrl: MusicPlayerIcon,
    gitUrl: "https://github.com/aashishh121/MusicPlayerJavaApp",
    badge: ["JAVA"],
    description:
      "Built a  CLI-based music player in JAVA with features to play, navigate and manage songs. Added functionalities such as playing the next or previous song, replaying the current song, listing all songs, and deleting songs. Added a simple menu for easy navigation and playlist management.",
  },
];
//min-h-[calc(100vh-84px)]
function Projects() {
  return (
    <>
      <div className="px-10 pt-5 ">
        <div className="font-semibold">
          Fun Projects
          <div className="w-10 h-0.5 bg-red-600"></div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 flex-col md:flex-row cursor-pointer">
          {projectList.map((data) => (
            <>
              <div className="flex flex-1 basis-1/4  items-center grayscale hover:grayscale-0 bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 ">
                <a href={data.gitUrl}>
                  <div className="flex justify-center">
                    <img
                      className="py-2 w-20 h-20 md:h-20 md:w-20  "
                      src={data.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-600 ">
                      {data.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {data.description}
                    </p>
                    <div>
                      {data.badge.map((txt) => (
                        <>
                          <span className="bg-green-100 text-green-600 text-xs font-medium me-2 px-2.5 rounded">
                            {txt}
                          </span>{" "}
                        </>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
