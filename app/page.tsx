import { CustomFilter, Hero, SearchBar } from "@components";

const Home = () => {
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
            <CustomFilter title="fuel" />
            <CustomFilter title="fuel" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
