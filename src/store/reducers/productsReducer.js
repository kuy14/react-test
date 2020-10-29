import { GET_DATA, ADD_CART, EMPTY_CART, SET_LOADING } from "../types";

const initialState = {
  products: [],
  carts: [],
  totalPrice: 0,
  totalCarts: 0,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_CART:
      const oldCart = state.carts;
      // cek array state
      var newCart = oldCart.find((item) => {
        return item.productId === action.payload.productId;
      });
      // jika array of object masih kosong / undefined
      if (newCart === undefined) {
        // isi state carts langsung dari action.payload
        return {
          ...state,
          carts: [...state.carts, action.payload],
          totalPrice: state.totalPrice + parseInt(action.payload.productPrice),
          totalCarts: state.totalCarts + 1,
        };
      } else {
        // buat object baru dengan memasukkan object hasil dari find
        const existingCart = Object.assign({}, newCart);
        existingCart.items = existingCart.items + 1;

        // cari object yang sudah ada, lalu hapus object
        let filteredCart = [
          ...state.carts.filter(
            (item) => item.productId !== action.payload.productId
          ),
        ];

        // tambahkan dengan object yang baru
        filteredCart.push(existingCart);
        return {
          ...state,
          carts: filteredCart, // state carts diisi dengan array of object yang baru
          totalPrice: state.totalPrice + parseInt(existingCart.productPrice),
          totalCarts: state.totalCarts + 1,
        };
      }
    case EMPTY_CART:
      return {
        ...state,
        products: state.products,
        carts: [],
        totalPrice: 0,
        totalCarts: 0,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}
