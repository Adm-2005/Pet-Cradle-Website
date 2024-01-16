import { BsInstagram, BsFacebook, BsTwitter, BsEnvelope } from "react-icons/bs";
import { footerLinks } from "../constants/index";

export default function Footer() {
  return (
    <footer className="absolute z-10 w-full flex items-center flex-wrap bg-black shadow-xl">
      <div className="flex flex-1 justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <div className="flex justify-center items-center max-sm:px-4 px-16 mr-auto">
              <img
                src="src/assets/images/headerLogo.svg"
                className="w-10 h-10"
              ></img>
              <h1 className="pl-2 p-4 font-montserrat font-bold text-2xl text-red-600 ">
                Pet Cradle
              </h1>
            </div>
          </a>

          <p className="mt-6 max-sm:px-4 px-16 text-base leading-7 font-montserrat text-white sm:max-w-lsm">
            Discover the joy of adopting a companion and providing them a
            forever home. Begin your story of compassion and companionship
            today!
          </p>
          <div className="flex gap-5 max-sm:pl-4 pl-16 max-sm:py-4 py-8 justify-center items-center">
            <a href="#">
              <BsInstagram size="30px" color="white" />
            </a>
            <a href="#">
              <BsFacebook size="30px" color="white" />
            </a>
            <a href="#">
              <BsTwitter size="30px" color="white" />
            </a>
            <a href="#">
              <BsEnvelope size="30px" color="white" />
            </a>
          </div>
          <div className="mt-6 mb-6 flex flex-1 max-sm:px-4 px-16 py-4 justify-between lg:gap-10 gap-20 xl:gap-60 flex-wrap max-sm:hidden">
            {footerLinks.map((section) => (
              <div key={section}>
                <h4 className="text-white font-montserrat text-xl leading-normal font-bold mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li className="text-white mt-3 font-montserrat text-base leading-normal hover:text-blue-500">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex gap-5 pb-4 justify-center items-center">
            <p className="text-white mt-2 max-sm:px-4 px-16 font-montserrat sm:max-w-sm">
              &copy; Copyright{" "}
              <a className="text-blue-500" href="https://mez.ink/akshatmishra">
                Akshat Mishra
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
