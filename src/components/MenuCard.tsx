import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Add_item from "../Actions/action";
import { CardData } from "../modals/CardData";

type MenuCardProps = {
  data: CardData;
};

const MenuCard: FC<MenuCardProps> = ({ data }) => {
  const dispatch = useDispatch();

  const sendData = (d: any) => {
    dispatch(Add_item(d));
  };

  return (
    <Link
      to={`${data.id}/details`}
      className="p-4 rounded-md hover:shadow-md hover:border hover:border-gray-400"
    >
      <div>
        <img className="w-64 h-64" src={data.imgdata} />
      </div>
      <div className="p-2">
        <div className="my-3">
          <h2 className="text-xl font-semibold text-black">{data.rname}</h2>
          <p className="my-1 text-gray-700">Price : ₹{data.price}</p>
        </div>
        <button
          onClick={() => sendData(data)}
          className="w-full py-2 text-xl font-semibold text-white bg-blue-600 rounded-md "
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

MenuCard.defaultProps = {};

export default memo(MenuCard);
