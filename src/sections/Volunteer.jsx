export default function Volunteer(props) {
  return (
    <section
      id="volunteer"
      className={
        props.darkMode ? "px-16 sm:px-8 bg-[#121212]" : "px-16 sm:px-8"
      }
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="max-sm:text-4xl text-6xl max-sm:mx-auto text-red-600 mt-10 font-palanquin font-bold">
          Contact Us
        </h2>
      </div>
      <form
        className={
          props.darkMode
            ? "mt-10 flex flex-1 flex-col shadow-2xl rounded-xl  px-8 xl:px-20 py-4 mb-4 mx-auto bg-[#202020] w-fit"
            : "mt-10 flex flex-1 flex-col shadow-2xl rounded-xl  px-8 xl:px-20 py-4 mb-4 mx-auto bg-white border w-fit"
        }
      >
        <div className="mb-4 flex flex-col items-center">
          <label htmlFor="Name" className="block text-gray-700 font-bold mb-2">
            Name
            <input
              id="Name"
              placeholder="Enter your Name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
          </label>
          <label htmlFor="Email" className="block text-gray-700 font-bold mb-2">
            Email
            <input
              id="Email"
              placeholder="Enter your email"
              type="email"
              className="peer shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
            <p className="peer-invalid:block hidden text-red-500">
              Enter a valid email address.
            </p>
          </label>
          <label
            htmlFor="Number"
            className="block text-gray-700 font-bold mb-2"
          >
            Phone
            <input
              id="Number"
              placeholder="Enter your number"
              type="tel"
              maxLength={10}
              className="peer shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
            <p className="peer-invalid:block hidden text-red-500">
              Enter a valid phone number.
            </p>
          </label>
          <button className="px-4 py-2 mt-4 bg-gradient-to-r from-red-600 to-red-300 rounded-lg text-white font-montserrat font-semibold ">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
