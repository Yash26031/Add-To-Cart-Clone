import { FC, memo } from "react";

type MenuItemCardProps = {};

const MenuItemCard: FC<MenuItemCardProps> = (props) => {
  return <div className="bg-red-600">Card Items</div>;
};

MenuItemCard.defaultProps = {};

export default memo(MenuItemCard);
