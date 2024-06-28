"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";
import { useState } from "react";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  const [btnHover, setBtnHover] = useState(false);
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles} hover:bg-blue-700`}
      onClick={handleClick}
      onMouseEnter={() => setBtnHover(true)}
      onMouseLeave={() => setBtnHover(false)}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className={`object-contain ${
              btnHover ? "scale-125 duration-200" : "scale-100 duration-200"
            }`}
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
