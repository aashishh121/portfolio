import React, { useRef, useState } from "react";
import Header from "../Header";
import Home from "../Home";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

function AppLayout() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const [url, setUrl] = useState("");

  const handleUrl = (getUrl: string) => {
    setUrl(getUrl);
  };

  const gotoHome = () => {
    if (homeRef) {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div ref={homeRef} className="px-8">
        <Header handleUrl={handleUrl} />
        <div>
          <main className="">
            {/* <Outlet /> */}
            <Home url={url} />
          </main>
          <a
            href="#home"
            className="fixed bottom-8 right-8 w-12 h-12 bg-slate-300 rounded-lg p-3"
            onClick={() => gotoHome()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6c737b"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-up-to-line"
            >
              <path d="M5 3h14" />
              <path d="m18 13-6-6-6 6" />
              <path d="M12 7v14" />
            </svg>
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
