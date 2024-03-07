"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { CarCard, CustomFilter, Hero, SearchBar } from "@components";
import { fuels, yearsOfProduction } from "@constants";
import { fetchCars } from "@utils";
import ShowMore from "@components/ShowMore";

const Home = () => {
  const [allCars, setAllCars] = useState([]);
  const [allBmw, setAllBmw] = useState([]);
  const [allBenz, setAllBenz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const allCars = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2023,
        model: model || "",
        limit: limit || 10,
        fuel: fuel || "",
      });
      setAllCars(allCars);
      const allBmw = await fetchCars({
        manufacturer: "bmw",
        year: year || 2023,
        model: model || "",
        limit: limit || 10,
        fuel: fuel || "",
      });
      setAllBmw(allBmw);
      const allBenz = await fetchCars({
        manufacturer: "Mercedes-Benz",
        year: year || 2023,
        model: model || "",
        limit: limit || 10,
        fuel: fuel || "",
      });
      setAllBenz(allBenz);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, limit, year, manufacturer, model]);

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
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
      </div>

      {/* <section>
        {!loading ? (
          <>
            {allCars.length > 0 ? (
              <>
                <div className="home__cars-wrapper">
                  {allCars?.map((car) => (
                    <CarCard car={car} />
                  ))}
                </div>

                <ShowMore
                  pageNumber={limit / 10}
                  isNext={limit > allCars.length}
                  setLimit={setLimit}
                />
              </>
            ) : (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">
                  Oops, no results
                </h2>
                <p>{allCars?.message}</p>
              </div>
            )}
          </>
        ) : (
          <div className="mt-16 w-full flex-center">
            <Image
              src="/loader.svg"
              alt="loader"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        )}
      </section> */}
      {allCars.length > 0 ? (
        <section className="py-6  padding-x" id="cars">
          <h1 className="text-2xl font-bold">All Cars</h1>

          <div className="home__cars-wrapper">
            {allCars?.map((car, index) => (
              <CarCard key={`car-${index}`} car={car} />
            ))}
          </div>

          {loading && (
            <section className="dots-container">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </section>
          )}

          <ShowMore
            pageNumber={limit / 10}
            isNext={limit > allCars.length}
            setLimit={setLimit}
          />
        </section>
      ) : (
        !loading && (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )
      )}

      {allCars.length > 0 ? (
        <section className="padding-x py-10">
          <h1 className="text-2xl font-bold">All BMW</h1>
          <div className="flex items-center gap-5 w-full max-w-full overflow-x-auto pb-4">
            {allBmw?.map((car) => (
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

      {allCars.length > 0 ? (
        <section className="padding-x pt-10">
          <h1 className="text-2xl font-bold">All Mercedes-Benz</h1>
          <div className="flex items-center gap-5 w-full max-w-full overflow-x-auto ">
            {allBenz?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </main>
  );
};

export default Home;
