import { useState } from "react";

export default function FindPet() {
  let { location, setLocation } = useState("");
  return (
    <section id="find" className="px-16 sm:px-8">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="max-sm:text-4xl text-6xl max-sm:mx-auto  text-red-600 mt-10 font-palanquin font-bold">
          Find a Pet
        </h2>
      </div>
      <div className="mt-10 mx-auto">
        <form className=" shadow-2xl rounded-xl  px-8 mx-auto  py-4 mb-4 bg-white border w-fit">
          <div className="mb-4 flex flex-col justify-center items-center">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Location"
            >
              Location
              <input
                onChange={(e) => setLocation(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Location"
                value={location}
                placeholder="Add Location"
              ></input>
            </label>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Animal"
            >
              Animal
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Animal"
                type=""
              ></input>
            </label>
            <button className="px-4 py-2 mt-4 bg-gradient-to-r from-red-600 to-red-300 rounded-lg text-white font-montserrat font-semibold ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
