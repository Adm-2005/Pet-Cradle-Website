import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { navLinks } from "../constants/index";

export default function Nav(props) {
  const [isOpen, setisOpen] = useState(false);

  function toggleNavBar() {
    setisOpen(!isOpen);
  }

  return (
    <nav
      className={
        props.darkMode
          ? "sticky top-0 z-10 w-full flex items-center flex-wrap bg-black shadow-xl shadow-[#202020]"
          : "sticky top-0 z-10 w-full flex items-center flex-wrap bg-white shadow-xl"
      }
    >
      <div className="flex justify-center items-center pl-2 mr-auto">
        <img src="src/assets/images/headerLogo.svg" className="w-10 h-10"></img>
        <h1 className="pl-2 p-4 font-montserrat font-bold text-2xl text-red-600 ">
          Pet Cradle
        </h1>
      </div>
      {/* nav-menu for large devices(breakpoint: min width 1024px */}
      <div className="lg:hidden">
        <BsFillMoonStarsFill
          size="25px"
          className="cursor-pointer"
          color={props.darkMode ? "white" : "black"}
          onClick={props.toggleDarkMode}
        />
      </div>
      {/* hamburger menu for devices smaller than 1024px */}
      {isOpen ? (
        <div className="p-4 lg:hidden">
          <TiTimes size="30px" color="#dc2626" onClick={toggleNavBar} />
        </div>
      ) : (
        <div className="p-4 lg:hidden">
          <TiThMenu size="30px" color="#dc2626" onClick={toggleNavBar} />
        </div>
      )}

      <ul
        className={
          isOpen
            ? "flex flex-col lg:flex-row first: divide-y space-y-12 pl-2 pb-12 left-0  w-full "
            : "hidden lg:flex space-x-16 pr-4 "
        }
      >
        <div className="">
          <BsFillMoonStarsFill
            size="25px"
            className="cursor-pointer hidden lg:block"
            color={props.darkMode ? "white" : "black"}
            onClick={props.toggleDarkMode}
          />
        </div>
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-xl text-red-600 font-semibold hover:text-black"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
