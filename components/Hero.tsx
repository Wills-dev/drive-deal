"use client";

import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div
      className="hero min-h-[90vh] relative"
      style={{
        backgroundImage: 'url("/bg-2.jpeg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute h-full w-full z-10 top-0 left-0 bg-white opacity-50"></div>

      <div className="flex-1 flex flex-col justify-center padding-x z-30">
        <h1 className="hero__title">
          Simplify Your Car Rental: Enjoy a Seamless Booking Experience!
        </h1>
        <div className="">
          <p className="hero___subtitle">
            Effortlessly Secure Your Ideal Car: Find, Book, or Rent in Minutes!
          </p>
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
      </div>
      {/* <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
