import { TiThMenu } from "react-icons/ti";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { navLinks } from "../constants/index";

export default function Nav(props) {
  return (
    <nav
      className={
        props.darkMode
          ? "absolute z-10 w-full flex items-center flex-wrap bg-black shadow-xl"
          : "absolute z-10 w-full flex items-center flex-wrap bg-grey-800 shadow-xl"
      }
    >
      <div className="flex justify-center items-center pl-2 mr-auto">
        <img src="src/assets/images/headerLogo.svg" className="w-10 h-10"></img>
        <h1 className="pl-2 p-4 font-montserrat font-bold text-2xl text-red-600 ">
          Pet Cradle
        </h1>
      </div>

      {/* nav-menu for large devices(breakpoint: min width 1024px */}
      <ul className="hidden lg:flex  space-x-16 pr-4 ">
        <div className="">
          <BsFillMoonStarsFill
            size="25px"
            className="cursor-pointer"
            color={props.darkMode ? "white" : "black"}
            onClick={props.toggleDarkMode}
          />
        </div>
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-lg text-red-600 font-semibold hover:text-black"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* nav-menu for smaller devices */}
      <ul className="max-lg:flex-col hidden bg-white ">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-lg text-red-600 font-semibold hover:text-black"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="lg:hidden">
        <BsFillMoonStarsFill
          size="25px"
          className="cursor-pointer"
          color={props.darkMode ? "white" : "black"}
          onClick={props.toggleDarkMode}
        />
      </div>

      {/* hamburger menu for devices smaller than 1024px */}
      <div className="p-4 lg:hidden">
        <TiThMenu size="30px" color="#dc2626" />
      </div>
    </nav>
  );
}
