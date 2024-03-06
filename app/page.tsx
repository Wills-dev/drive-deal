import { CarCard, CustomFilter, Hero, SearchBar } from "@components";
import { fuels, yearsOfProduction } from "@constants";
import { fetchCars } from "@utils";

const Home = async ({ searchParams }) => {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    model: searchParams.model || "",
    limit: searchParams.limit || 30,
    fuel: searchParams.fuel || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <div className="h1 text-4xl font-extrabold">Car Catalogue</div>
          <p className="">Explore the cars yiu might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filters-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="fuel" options={yearsOfProduction} />
          </div>
        </div>
      </div>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper padding-x">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars.message}</p>
        </div>
      )}
    </main>
  );
};

export default Home;
