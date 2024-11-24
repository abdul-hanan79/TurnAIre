import * as React from "react";

export const SearchBar: React.FC = () => {
  return (
    <form className="relative w-full">
      <label htmlFor="searchInput" className="sr-only">
        Where to go?
      </label>
      <input
        id="searchInput"
        type="text"
        placeholder="Where to go?"
        className="px-2.5 py-4 mt-4 text-base text-gray-500 bg-white rounded-xl border border-green-800 border-solid min-h-[48px] w-full"
      />
    </form>
  );
};
