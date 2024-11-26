import { MenuCard } from "@/components/template/cards/MenuCard";
import { TravelCard } from "@/components/template/cards/TravelCard";
import { TravelAssistant } from "@/components/template/form/TravelAssistant";
import { ICONS } from "../../../../../public";
import { CircleStackIcon, UserCircleIcon } from "@heroicons/react/16/solid";
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
      "https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/f6e6b0b632a05ca82c0b3ada14106db3769627d363581d9a54cd2931910639d7?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&",
    title: "Sailing Komodo",
    location: "Labuan Bajo",
    rating: 4.8,
    price: 200,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/501857dd4f1c40f4a47a652b4b27bf3b/f6e6b0b632a05ca82c0b3ada14106db3769627d363581d9a54cd2931910639d7?apiKey=501857dd4f1c40f4a47a652b4b27bf3b&",
    title: "Sailing Komodo",
    location: "Labuan Bajo",
    rating: 4.8,
    price: 200,
  },
];

const menuItems = [
  {
    icon: ICONS.PLAN,
    label: "Flights",
    isActive: true,
  },
  {
    icon: ICONS.HOTEL,
    label: "Hotels",
  },
  {
    icon: ICONS.TRAIN,
    label: "Trains",
  },
  {
    icon: ICONS.FERRY,
    label: "Ferry",
  },
  {
    icon: ICONS.BUS,
    label: "Bus",
  },
];

export const TravelDashboard: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col pt-10 mx-auto w-full  bg-neutral-100 ">
      <section className="flex flex-col items-start px-4 w-full">
        <header className="flex w-full justify-between ">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-primary">Hi, Paul</h1>
            <div className="flex gap-1 text-sm md:text-lg text-yellow-400">
             <CircleStackIcon className="w-5 h-5 md:w-6 md:h-6"/>
              <span>2.000 points</span>
            </div>
          </div>
          <UserCircleIcon
          className="md:w-20 md:h-20 w-10 h-10 text-primary"
          />
        </header>

        <TravelAssistant />
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 mt-5 text-center w-full">
          {menuItems.map((item, index) => (
            <MenuCard
              key={`${item.label}-${index}`}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-6   p-2 my-10 ">
          {travelDestinations.map((destination, index) => (
            <div key={index} className="flex flex-col">
              <TravelCard {...destination} />
            </div>
          ))}
        </section>

        {/* <section className="flex gap-10 mt-7">
          <h2 className="my-auto text-base font-semibold text-gray-600">
            Hotels recomendation for you
          </h2>
          <button className="text-sm tracking-wide leading-6 text-cyan-700">
            See all
          </button>
        </section> */}
      </section>
    </main>
  );
};
