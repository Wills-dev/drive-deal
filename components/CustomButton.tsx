"use client";

import { CustomButton } from "@types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButton) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
