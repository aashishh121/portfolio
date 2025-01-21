import React, { useEffect, useRef } from "react";
import Illustration from "../../Assets/illustration.png";
import Programmer from "../../Assets/programmer2.svg";
import Boy from "../../Assets/boy.png";
import RectLogo from "../../logo.svg";
import NestjsLogo from "../../Assets/nestjs.svg";
import TailwindIcon from "../../Assets/tailwind.svg";
import SocketIcon from "../../Assets/socket.svg";
import KafkaIcon from "../../Assets/kafka.svg";
import DockerIcon from "../../Assets/docker.svg";
import NextjsIcon from "../../Assets/nextjs.svg";
import LinkedinIcon from "../../Assets/linkendin.svg";
import GithubIcon from "../../Assets/github.svg";
import Work from "../Work";
import Projects from "../Projects";
import About from "../About";
import { useLocation } from "react-router-dom";

interface ISkillIcon {
  title: string;
  imageUrl: string;
}

const skillIcons: ISkillIcon[] = [
  { title: "React Js", imageUrl: RectLogo },
  { title: "Nest Js", imageUrl: NestjsLogo },
  { title: "Tailwind CSS", imageUrl: TailwindIcon },
  { title: "Socket.IO", imageUrl: SocketIcon },
  { title: "Kafka Js", imageUrl: KafkaIcon },
  { title: "Docker", imageUrl: DockerIcon },
  { title: "Next Js", imageUrl: NextjsIcon },
];

function Home({ url }: any) {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({
    about: null,
    works: null,
    projects: null,
  });

  useEffect(() => {
    // const route = pathname.split("/")[1];
    if (url && sectionRefs.current[url]) {
      sectionRefs.current[url]?.scrollIntoView({ behavior: "smooth" });
    }
  }, [url]);

  const downloadCv = () => {
    const url =
      "https://docs.google.com/document/d/1HNQRSCaEHW4iIiby97Z7VsfIOJYBwS0R4d3Y1UpN22w/export?format=pdf";

    // const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `ashish_kumar_gupta.pdf`);

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();
  };

  return (
    <>
      <div className="flex items-center justify-center h-[calc(100vh-84px)]">
        <div className="relative">
          <div className="py-4 text-3xl font-semibold text-slate-400 relative">
            HELLO
            <div className="absolute w-56 h-0.5 bg-slate-400 top-9 left-0"></div>
          </div>
          <div>
            <h1 className="text-4xl text-slate-400 font-bold">
              I'M ASHISH KUMAR
            </h1>
            <h3 className="text-xl text-slate-400 font-bold">
              A Full Stack Developer
            </h3>
          </div>
          <div className="flex justify-center items-center m-10">
            <button
              className="px-8 py-2 rounded font-semibold text-slate-400 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]"
              onClick={downloadCv}
            >
              GET CV
            </button>
          </div>
          <div className="flex gap-3">
            {skillIcons.map((data, index) => (
              <div key={index}>
                <img
                  src={data.imageUrl}
                  alt={data.title}
                  className="w-10 h-10 cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-10 justify-center items-center text-sm">
            Find me on
            <a href="https://www.linkedin.com/in/aashishh121/">
              <img
                src={LinkedinIcon}
                alt="LinkedIn"
                className="w-6 h-6 cursor-pointer grayscale hover:grayscale-0"
              />
            </a>
            <a href="https://github.com/aashishh121">
              <img
                src={GithubIcon}
                alt="GitHub"
                className="w-6 h-6 cursor-pointer grayscale hover:grayscale-0"
              />
            </a>
          </div>
        </div>

        <div className="hidden md:block basis-1/2">
          <img src={Boy} alt="Illustration of a Boy" className="w-11/12" />
        </div>
      </div>

      <div ref={(el) => (sectionRefs.current.about = el)}>
        <About />
      </div>
      <div ref={(el) => (sectionRefs.current.works = el)}>
        <Work />
      </div>
      <div ref={(el) => (sectionRefs.current.projects = el)}>
        <Projects />
      </div>
    </>
  );
}

export default Home;
