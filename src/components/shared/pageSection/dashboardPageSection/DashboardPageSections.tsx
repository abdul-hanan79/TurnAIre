import { TravelCard } from "@/components/template/cards/TravelCard";
import { SearchBar } from "@/components/template/form/SearchBar";
import { NavigationItemProps } from "@/types";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  isActive = false,
}) => {
  return (
    <button
      className={`flex flex-col items-center ${
        isActive ? "text-green-800" : "text-gray-500"
      }`}
      aria-label={label}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-10 aspect-square"
      />
      <span className="text-sm tracking-wide leading-6">{label}</span>
    </button>
  );
};
const travelDestinations = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/06ebbf6689cfbf2c41b12b9271e0ad63121a7aed792c90de025fea088fe5114e?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&",
    title: "Mount Bromo",
    location: "Volcano in East Java",
    rating: 4.9,
    price: 150,
    duration: "3D2N",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/f6e6b0b632a05ca82c0b3ada14106db3769627d363581d9a54cd2931910639d7?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&",
    title: "Labengki Sombori",
    location: "Islands in Sulawesi",
    rating: 4.8,
    price: 250,
    duration: "3D2N",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/1e877ca746c0638835c7ac36be0e75c3cc684fd07845540ce2844edae36e14d3?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&",
    title: "Sailing Komodo",
    location: "Labuan Bajo",
    rating: 4.8,
    price: 200,
  },
];

const navigationItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/ca0b8cd68d896b68af9d7ce0cbce97a7b203fe7175278a1d59cacd2b38adf926?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&",
    label: "Home",
    isActive: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/fd7b5fbd03092aeddd17550351f6acfb1bb0c699cd47d40847aa9e2d260df81b?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&",
    label: "Explore",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/ca733fcecfa1125d32a94380de0add70e0c79651a7d949097976d6a010d557ec?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&",
    label: "Bookings",
  },
];

export const TravelDashboard: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col pt-10 mx-auto w-full  bg-neutral-100  ">
      <section className="flex flex-col items-start pl-5 w-full">
        <header className="flex w-full justify-between ">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-white">Hi, Paul</h1>
            <div className="flex gap-1 text-sm text-yellow-400">
              <img
                // height={200}
                // width={200}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/136a780854d5bad771c91bcbb53fcff0db32cd54701930c8c792cd91d3f3c8f6?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&"
                alt=""
                className="object-contain shrink-0 w-5 aspect-square"
              />
              <span>2.000 points</span>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/28ad82385d02ae6b8560d1154bc354ec36ce2adec1af85aef33be9a564818e10?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&"
            alt="Profile"
            className="object-contain shrink-0 aspect-square w-[55px]"
          />
        </header>

        <SearchBar />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
          {travelDestinations.map((destination, index) => (
            <div key={index} className="flex flex-col">
              <TravelCard {...destination} />
            </div>
          ))}
        </section>

        <section className="flex gap-10 mt-7">
          <h2 className="my-auto text-base font-semibold text-gray-600">
            Hotels recomendation for you
          </h2>
          <button className="text-sm tracking-wide leading-6 text-cyan-700">
            See all
          </button>
        </section>

        <article className="flex gap-3 pr-3 mt-2 max-w-full bg-white rounded-xl shadow-[0px_10px_13px_rgba(0,0,0,0.13)] w-[393px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/49ecb7f21232e6396e9703ac1a2752445fd2e0b8ec1c1f222b2cf2b4c4d2794e?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&"
            alt="Swiss-Belhotel Rainforest Kuta"
            className="object-contain shrink-0 rounded-none aspect-[0.94] w-[99px]"
          />
          <div className="flex flex-col grow shrink-0 items-start my-auto basis-0 w-fit">
            <h3 className="text-base font-semibold text-green-800">
              Swiss-Belhotel Rainforest Kuta
            </h3>
            <p className="text-xs text-gray-500">
              Jl. Sunset Road No. 101, Kuta, Bali , Indonesia
            </p>
            <div className="flex flex-col self-stretch pl-4 mt-1 text-xs">
              <span className="self-start text-gray-500">4-star hotel</span>
              <span className="self-end mt-4 text-green-800">$ 50/night</span>
            </div>
          </div>
        </article>
      </section>

      <nav className="flex z-10 gap-5 justify-between items-start px-8 pt-3.5 pb-6 -mt-11 w-full border-t shadow-sm bg-neutral-100 border-black border-opacity-20">
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} {...item} />
        ))}
        <button className="text-sm tracking-wide leading-6 text-gray-500 mt-6">
          Account
        </button>
      </nav>
    </main>
  );
};
