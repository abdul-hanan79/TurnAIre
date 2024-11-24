import { TravelCardProps } from "@/types";
import * as React from "react";

export const TravelCard: React.FC<TravelCardProps> = ({
  imageSrc,
  title,
  location,
  rating,
  price,
  duration
}) => {
  return (
    <article className="flex flex-col grow pb-2 w-full rounded-xl shadow-[0px_10px_13px_rgba(0,0,0,0.13)] " >
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} destination`}
        className="object-contain aspect-[1.26]"
      />
      <div className="flex flex-col items-start p-2 mt-2 w-full">
        <h3 className="text-xl md:text-2xl font-semibold text-green-800">{title}</h3>
        <p className="text-md md:text-lg text-gray-500">{location}</p>
        <div className="flex gap-1 mt-1 text-sm md:text-lg text-gray-500 whitespace-nowrap">
          <img
            loading="lazy"
            height={20}
            width={20}
            src="https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/77b4bffad1010c5d446ca5d7620932f28452dd7161df2a70d09cee7132b8d7ed?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&"
            alt=""
            className="object-contain shrink-0 aspect-square"
          />
          <span>{rating}</span>
        </div>
        <div className="flex gap-5 justify-between items-start self-stretch mt-5 w-full">
          <div className="flex flex-col">
            <span className="self-start text-md md:text-lg text-gray-500">Start from</span>
            <span className="text-md md:text-lg text-green-800">$ {price}/pax</span>
          </div>
          {duration && (
            <div className="overflow-hidden mt-1 text-sm md:text-md tracking-wide leading-relaxed text-white whitespace-nowrap bg-green-800 rounded-2xl p-3">
              {duration}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
