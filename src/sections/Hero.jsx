import { HiArrowCircleRight } from "react-icons/hi";
import { statistics } from "../constants/index";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full px-16 max-sm:px-8 pt-28">
        <p className="text-xl font-montserrat text-red-600 ">
          Welcome to Pet Cradle!
        </p>
        <h1 className="mt-10 font-palanquin font-bold text-8xl max-sm:text-[72px] max-sm:text-[82]">
          Adopt. Love. Cherish.
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 ">
          Discover the joy of adopting a companion and providing them a forever
          home. Explore our heartwarming stories, meet your potential new family
          member, and embark on a journey of unconditional love. Begin your
          story of compassion and companionship today!
        </p>
        <a href="#find">
          <button className="flex justify-center items-center font-montserrat font-semibold bg-red-600 text-white px-7 py-4 leading-none rounded-md hover:bg-black">
            Adopt
            <HiArrowCircleRight className="ml-2" size="20px" />
          </button>
        </a>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 max-sm:gap-12 gap-16">
          {statistics.map((stat) => (
            <div>
              <p className="font-montserrat max-sm:text-3xl text-4xl font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" lg:pt-20 flex justify-center items-center min-h-screen lg:px-16 xl:w-2/5 ">
        <img
          className=" max-lg:w-full"
          src="src/assets/images/hero.jpg"
          height={500}
        ></img>
      </div>
    </section>
  );
}
