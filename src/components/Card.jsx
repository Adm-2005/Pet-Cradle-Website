export default function Card({ imgURL, name, species, breed, text }) {
  return (
    <div className="flex flex-1 flex-col w-fit max-sm:w-fit h-fit rounded-xl pb-4 shadow-2xl">
      <img src={imgURL} className="w-[280px] h-[280px] rounded-t-xl "></img>
      <h2 className="px-4 mt-2 text-2xl leading-normal font-bold font-palanquin">
        {name}
      </h2>
      <h3 className="px-4 text-lg font-montserrat ">
        <span className="font-semibold">Species:</span> {species}
      </h3>
      <h3 className="px-4 text-lg font-montserrat">
        <span className="font-semibold">Breed:</span> {breed}
      </h3>
      <p className="px-4 font-montserrat text-md">{text}</p>
    </div>
  );
}
