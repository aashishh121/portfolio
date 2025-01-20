import React from "react";
import Header from "../Header";
import Home from "../Home";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

function AppLayout() {
  return (
    <>
      <div className="px-8">
        <Header />
        <div>
          <main className="">
            <Outlet />
          </main>
          <a
            href="home"
            className="fixed bottom-8 right-8 w-12 h-12 bg-slate-300 rounded-lg p-3"
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
