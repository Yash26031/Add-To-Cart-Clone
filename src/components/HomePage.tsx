import { FC, memo, useEffect, useState } from "react";
import CardsData from "../CardsData";
import { CardData } from "../modals/CardData";
import MenuCard from "./MenuCard";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = () => {
  const [cardDetails, setCardetails] = useState(CardsData);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-blue-100">
      <h1 className="mb-5 text-4xl font-bold text-center">
        Add To Cart Project
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
        {cardDetails.map((e) => (
          <MenuCard data={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

HomePage.defaultProps = {};

export default memo(HomePage);
