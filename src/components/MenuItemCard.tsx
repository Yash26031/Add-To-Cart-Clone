import { FC, memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Cardsdata from "../CardsData";
import { CardData } from "../modals/CardData";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";
import { State } from "../store";

type MenuItemCardProps = {};

const MenuItemCard: FC<MenuItemCardProps> = (props) => {
  const [data, setData] = useState<CardData[] | []>([]);

  //   const getData = useSelector((s: State) => s.items);
  //   console.log("get data is", getData);

  const { id } = useParams();

  console.log("id is", id);

  const compare = () => {
    let compareData = Cardsdata.filter((e) => {
      return e.id == Number(id);
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, []);

  console.log("data is ", data);

  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-4xl p-5 mx-auto">
        <h1 className="text-3xl font-semibold text-black">Item Detail Page</h1>
        {data.map((e) => (
          <div className="flex p-5 mt-3 border border-gray-300 rounded-md shadow-lg">
            <div>
              <img className="object-cover h-72 w-72" src={e.imgdata} />
            </div>
            <div className="grid grid-cols-2 ml-5 ">
              <div className="flex flex-col justify-evenly">
                <p>
                  <span className="font-bold"> Restaurant : </span>
                  {e.rname}
                </p>
                <p>
                  <span className="font-bold"> Price :</span>₹ {e.price}
                </p>
                <p>
                  <span className="font-bold"> Dishes :</span> {e.address}
                </p>
                <p>
                  <span className="font-bold"> Total :</span>₹ {e.price}
                </p>
              </div>
              <div className="flex flex-col justify-evenly">
                <p className="flex">
                  <span className="font-bold"> Rating :</span>{" "}
                  <button className="flex items-center p-1 ml-2 text-white bg-green-600 border border-white rounded-md">
                    {e.rating} <AiOutlineStar className="ml-2" />
                  </button>
                </p>
                <p>
                  <span className="font-bold"> Order Review :</span>{" "}
                  {e.somedata}
                </p>
                <p className="flex">
                  <span className="font-bold"> Remove :</span>
                  <MdOutlineDeleteForever
                    onClick={() => console.log("buttom clicked")}
                    size={30}
                    className="text-red-600 cursor-pointer"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

MenuItemCard.defaultProps = {};

export default memo(MenuItemCard);
