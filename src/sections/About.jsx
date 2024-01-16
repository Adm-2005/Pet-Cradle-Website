export default function About() {
  return (
    <section id="about" className="px-16 max-sm:px-8">
      <div className="flex flex-col">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="max-sm:text-4xl text-6xl max-sm:mx-auto text-red-600 font-palanquin font-bold">
            About Us
          </h2>
        </div>
        <ul className="xl:px-24">
          <li>
            <p className="font-montserrat text-slate-gray text-lg xl:text-2xl leading-8 mt-6 mb-14 ">
              Pet Cradle is a haven where compassion meets companionship, and
              every story begins with a furry friend. At Pet Cradle, we believe
              in the transformation power of the bond between humans and
              animals, and our mission is to create lasting connections that
              enrich both lives.
            </p>
          </li>
          <li>
            <h3 className="max-sm:text-2xl text-4xl  text-red-600 font-palanquin font-bold">
              Our Mission
            </h3>
            <p className="font-montserrat text-slate-gray text-lg xl:text-2xl leading-8 mt-6 mb-14 ">
              Pet Cradle envisions a world where every paw finds a loving
              embrace, where pets are not just companions but cherished family
              members. We aspire to be the bridge that brings hearts and paws
              together, creating a community built on love, responsibility, and
              shared joy.
            </p>
          </li>
          <li>
            <h3 className="max-sm:text-2xl text-4xl  text-red-600 font-palanquin font-bold">
              What Sets Us Apart?
            </h3>
            <p className="font-montserrat text-slate-gray xl:text-2xl text-lg leading-8 mt-6 mb-14 ">
              <ul className="list-disc">
                <li>
                  <p className="mt-4">
                    <span className="font-semibold">Caring Connections:</span>{" "}
                    At Pet Cradle, we prioritize the well-being of each animal.
                    Our dedicated team works tirelessly to ensure that every pet
                    in our care receives love, attention, and the best possible
                    chance for a happy, healthy life.
                  </p>
                </li>
                <li>
                  <p className="mt-4">
                    <span className="font-semibold">
                      Rescue and Rehabilitation:
                    </span>{" "}
                    Many of our furry residents have overcome challenging
                    circumstances. Pet Cradle is committed to rescuing animals
                    in need, providing them with a safe haven, and supporting
                    their rehabilitation journey{" "}
                    <i>
                      (15 of our residents have gone onto become pop icons and
                      social media influencers)
                    </i>{" "}
                    until they find their forever homes.
                  </p>
                </li>
                <li>
                  <p className="mt-4">
                    <span className="font-semibold">
                      Transparency and Trust:
                    </span>{" "}
                    We believe in transparency throughout the adoption process.
                    Our adoption profiles provide comprehensive information
                    about each pet's personality, preferences, and any special
                    needs, empowering adopters to make informed decisions.
                  </p>
                </li>
              </ul>
            </p>
          </li>
          <li>
            <h3 className="max-sm:text-2xl text-4xl text-red-600 font-palanquin font-bold">
              Your Journey with Pet Cradle
            </h3>
            <p className="font-montserrat text-slate-gray text-lg xl:text-2xl leading-8 mt-6 mb-14 ">
              Whether you're looking for a loyal companion, a playful sidekick,
              or a furry confidant, Pet Cradle is here to guide you on your
              adoption journey. Our website showcases a curated selection of
              Featured Stars - animals whose personalities shine and are ready
              to embark on a new chapter with loving families.
            </p>
          </li>
          <li>
            <h3 className="max-sm:text-2xl text-4xl  text-red-600 font-palanquin font-bold">
              Join Us in Making a Difference
            </h3>
            <p className="font-montserrat text-slate-gray text-lg xl:text-2xl leading-8 mt-6 mb-14 ">
              Pet Cradle is more than a pet adoption platform; it's a community
              that celebrates the joy of giving and receiving unconditional
              love. By choosing to adopt from Pet Cradle, you are not only
              gaining a lifelong companion but also contributing to our mission
              to creating a world where every pet knows warmth of a caring home.
            </p>
          </li>
          <li>
            <p className="font-montserrat text-slate-gray text-lg xl:text-2xl leading-8 mt-6 mb-14 ">
              Thank you for being a part of the Pet Cradle family, where hearts
              and paws unite in a shared journey of love and companionship.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
