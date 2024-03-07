import { CarCard, CustomFilter, Hero, SearchBar } from "@components";
import { fuels, yearsOfProduction } from "@constants";
import { fetchCars } from "@utils";
import { CarProps, HomeProps } from "@types";
import ShowMore from "@components/ShowMore";

const Home = async ({ searchParams }: HomeProps) => {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    model: searchParams.model || "",
    limit: searchParams.limit || 10,
    fuel: searchParams.fuel || "",
  });

  const allBmw = await fetchCars({
    manufacturer: "bmw",
    year: searchParams.year || 2023,
    model: searchParams.model || "",
    limit: searchParams.limit || 30,
    fuel: searchParams.fuel || "",
  });

  const allBenz = await fetchCars({
    manufacturer: "Mercedes-Benz",
    year: searchParams.year || 2023,
    model: searchParams.model || "",
    limit: searchParams.limit || 30,
    fuel: searchParams.fuel || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden ">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <div className="h1 text-4xl font-extrabold">Car Catalogue</div>
          <p className="">Explore the cars yiu might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
      </div>
      {!isDataEmpty ? (
        <section className="py-6  padding-x" id="cars">
          <h1 className="text-2xl font-bold">All Cars</h1>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars.message}</p>
        </div>
      )}

      {!isDataEmpty ? (
        <section className="padding-x py-10">
          <h1 className="text-2xl font-bold">All BMW</h1>
          <div className="flex items-center gap-5 w-full max-w-full overflow-x-auto pb-4">
            {allBmw?.map((car: CarProps) => (
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

      {!isDataEmpty ? (
        <section className="padding-x pt-10">
          <h1 className="text-2xl font-bold">All Mercedes-Benz</h1>
          <div className="flex items-center gap-5 w-full max-w-full overflow-x-auto ">
            {allBenz?.map((car: CarProps) => (
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
