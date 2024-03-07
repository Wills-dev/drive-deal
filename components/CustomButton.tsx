"use client";

import { CustomButton } from "@types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  id,
}: CustomButton) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {id ? (
        <a href={`#${id}`} className={`flex-1 ${textStyles}`}>
          {title}
        </a>
      ) : (
        <span className={`flex-1 ${textStyles}`}>{title}</span>
      )}

      {rightIcon && (
        <div className="relative w-4 h-4 ml-4">
          <Image src={rightIcon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
