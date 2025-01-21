import { NavLink } from "react-router-dom";

const navLink = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "Work",
    path: "works",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "About",
    path: "about",
  },
];

function Header({ handleUrl }: any) {
  return (
    <>
      <div className="flex justify-between py-2 bg-white">
        <div className="md:text-xl text-xs font-semibold">
          ASHISH<span className="text-xs">.dev</span>
        </div>
        <div className="flex gap-2">
          {navLink.map((data) => (
            <>
              <nav className="cursor-pointe z-50">
                <a href={"#" + data.path} onClick={() => handleUrl(data.path)}>
                  {data.title}
                </a>
              </nav>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
