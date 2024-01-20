import { useState } from "react";

export default function FindPet(props) {
  let { location, setLocation } = useState("");
  let { animal, setAnimal } = useState("");
  let { breed, setBreed } = useState("");

  return (
    <section
      id="find"
      className={
        props.darkMode ? "px-16 sm:px-8 bg-[#121212]" : "px-16 sm:px-8"
      }
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="max-sm:text-4xl text-6xl max-sm:mx-auto  text-red-600 mt-10 font-palanquin font-bold">
          Find a Pet
        </h2>
      </div>
      <div className="mt-10 mx-auto">
        <form
          className={
            props.darkMode
              ? "shadow-2xl rounded-xl  px-8  mx-auto  py-4 mb-4 w-fit bg-[#202020]"
              : " shadow-2xl rounded-xl  px-8 mx-auto  py-4 mb-4 bg-white border w-fit"
          }
        >
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
              className="flex flex-col text-gray-700 font-bold mb-2"
              htmlFor="Animal"
            >
              Animal
              <select
                id="Animal"
                value={animal}
                onChange={(e) => {
                  setAnimal(e.target.value);
                  setBreed("");
                }}
                className="shadow appearance-none border rounded w-full max-sm:min-w-[50vw] min-w-72 overflow-hidden mx-auto py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option className="opacity-20 " value="" disabled selected>
                  --
                </option>
              </select>
            </label>

            <label
              className="flex flex-col text-gray-700 font-bold mb-2"
              htmlFor="Breed"
            >
              Breed
              <select
                id="Breed"
                value={breed}
                onChange={(e) => {
                  setBreed(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full max-sm:min-w-[50vw] min-w-72 overflow-hidden mx-auto py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option className="opacity-20 " value="" disabled selected>
                  --
                </option>
              </select>
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
