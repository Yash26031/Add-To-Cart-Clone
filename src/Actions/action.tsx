import { State } from "../store";

export const ADD_TO_CART = "Add_to_cart";

const Add_item = (item: State) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export default Add_item;
