import { featured } from "../constants/index";
import Card from "../components/Card";

export default function Featured(props) {
  return (
    <section
      id="featured"
      className={
        props.darkMode
          ? "px-16 sm:px-8 bg-[#121212] text-white"
          : "px-16 sm:px-8"
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="max-sm:text-4xl text-6xl max-sm:mx-auto text-red-600 font-palanquin font-bold">
            Featured Stars
          </h2>
        </div>
        <div className="mt-16 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-4">
          {featured.map((member) => (
            <Card darkMode={props.darkMode} key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
