import { GET_DATA, ADD_CART } from "../types";

const initialState = {
  products: [],
  carts: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ADD_CART:
      return {
        ...state,
        // cek array sekarang, jika ada replace atau update
        carts: action.payload,
      };
    default:
      return state;
  }
}
