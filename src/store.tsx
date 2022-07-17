import { createStore, Reducer } from "redux";
import { ADD_TO_CART } from "./Actions/action";
import { CardData } from "./modals/CardData";

export type State = {
  items: CardData[];
};

const Init_state: State = {
  items: [],
};

const reducer: Reducer<State> = (state = Init_state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
