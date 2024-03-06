import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/car-icon.svg"
            alt="logo"
            width={55}
            height={18}
            className="object-contain"
          />
          <h5 className="ml-2 text-xl font-extrabold">DriveDeal</h5>
        </Link>
        <CustomButton
          title="Sigin In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]  bg-gray-200"
        />
      </nav>
    </header>
  );
};

export default Navbar;
