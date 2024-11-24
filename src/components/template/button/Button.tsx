import * as React from "react";
import { CTAButtonProps } from "../../../types";

export const CTAButton: React.FC<CTAButtonProps> = ({ children, className,handleClick }) => (
  <button 
    className={`gap-2.5 self-stretch px-2.5 py-4 text-base font-semibold text-white bg-cyan-700 min-h-[48px] rounded-[56px] ${className}`}
    onClick={handleClick}
  >
    {children}
  </button>
);