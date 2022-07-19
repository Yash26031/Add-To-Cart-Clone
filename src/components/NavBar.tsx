import { Badge } from "@mui/material";
import { FC, memo, useState } from "react";
import { BsFillCartPlusFill, BsCartPlusFill } from "react-icons/bs";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { State } from "../store";
// import { Cart_Selector } from "../Selectors";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  const getData = useSelector((s: State) => s.items);
  console.log("data aagya", getData);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="sticky top-0 flex items-center justify-between w-full px-10 py-4 font-semibold text-white bg-slate-700">
      <div className="flex space-x-5">
        <Link to="./">Add To Cart</Link>
        <Link to="home">Home</Link>
      </div>
      <Button
        className="text-white"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={getData.length} color="primary">
          <BsFillCartPlusFill size={40} />
        </Badge>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div>
          <div className="flex justify-end ">
            <button
              onClick={handleClose}
              className="absolute top-0 text-lg font-semibold text-red-400 right-2"
            >
              X
            </button>
          </div>

          <div className="p-6">
            {getData.length ? (
              <div className="w-72">
                <div className="grid grid-cols-2 text-sm font-bold ">
                  <p>Photo</p>
                  <p>Restaurant Name</p>
                </div>
                <hr className="h-1 my-2 bg-black" />

                {getData.map((e) => (
                  <div className="grid grid-cols-2 text-sm font-semibold text-gray-600 ">
                    <img className="w-24 h-24" src={e.imgdata} />
                    <div className="flex justify-between">
                      <div className="space-y-2">
                        <p>{e.rname}</p>
                        <p> Price: ₹{e.price}</p>
                        <p>Quantity: {e.qnty}</p>
                      </div>

                      <MdOutlineDeleteForever
                        onClick={() => console.log("buttom clicked")}
                        size={30}
                        className="text-red-600 cursor-pointer"
                      />
                    </div>
                    <hr className="my-2" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <p className="mr-3 text-2xl font-semibold text-black">
                  Cart Is Empty{" "}
                </p>
                <BsCartPlusFill size={30} />
              </div>
            )}
          </div>
        </div>
      </Menu>
    </div>
  );
};

NavBar.defaultProps = {};

export default memo(NavBar);
