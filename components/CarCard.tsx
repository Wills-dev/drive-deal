"use client";

import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@types";
import { calculateCarRent, generateCarImageUrl } from "@utils";

import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group transition-all">
      <div className="relative w-full my-3 h-40 object-contain">
        <Image
          src={generateCarImageUrl(car, "")}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="car-card__contennt">
        <h2 className="card-card__content-title capitalize">
          {make} {model}
        </h2>
      </div>
      <div className="flex justify-between items-center gap-14 w-full">
        <p className="flex items-center mt-6 text-[32px] font-extrabold flex-1">
          <span className=" text-[14px] font-semibold mr-1">$</span>
          {carRent}
          <span className=" text-[14px] font-medium ml-1">/day</span>
        </p>
        <div className="relative flex w-full mt-2 flex-1">
          <div className="flex  w-full justify-between text-gray gap-5">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/steering-wheel.svg"
                width={20}
                height={20}
                alt="stree"
              />
              <p className="text-[14px]">
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/tire.svg" width={20} height={20} alt="stree" />
              <p className="text-[14px]">{drive.toUpperCase()}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/gas.svg" width={20} height={20} alt="stree" />
              <p className="text-[14px]">{city_mpg}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <CustomButton
          title="View details"
          containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={() => setIsOpen(true)}
        />
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
