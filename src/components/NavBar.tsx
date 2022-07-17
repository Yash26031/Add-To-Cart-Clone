import { Badge } from "@mui/material";
import { FC, memo, useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Cart_Selector } from "../Selectors";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  const getData = Cart_Selector;
  console.log(getData);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex items-center justify-between px-10 py-4 font-semibold text-white bg-slate-700">
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
        <Badge badgeContent={4} color="primary">
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
              className="absolute top-0 text-sm font-semibold text-red-400 right-2"
            >
              X
            </button>
          </div>
          <div className="p-4">
            <p>cart is empty </p>
          </div>
        </div>
      </Menu>
    </div>
  );
};

NavBar.defaultProps = {};

export default memo(NavBar);
