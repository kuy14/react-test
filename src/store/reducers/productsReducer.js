import { GET_DATA, ADD_CART, EMPTY_CART } from "../types";

const initialState = {
  products: [],
  carts: [],
  totalPrice: 0,
  totalCarts: 0,
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
      var newCart = oldCart.filter(function (item) {
        return item.productId === action.payload.productId;
      });
      // jika array of object masih kosong
      if (newCart.length === 0) {
        // isi state carts langsung dari action.payload
        return {
          ...state,
          carts: [...state.carts, action.payload],
          totalPrice: state.totalPrice + parseInt(action.payload.productPrice),
          totalCarts: state.totalCarts + 1,
        };
      } else {
        // jika array of object dengan id yang sama sudah ada
        // tambahkan jumlah items dari items sebelumnya
        newCart[0].items = newCart[0].items + 1;
        const newCartObj = newCart[0]; //object yang baru di simpan di variable newCartObj
        let filteredCart = state.carts.filter(
          (cart) => cart.productId !== action.payload.productId
        ); // filter objek dari state yang sebelum nya, sehingga object di hapus
        filteredCart.push(newCartObj); // tambahkan dengan object yang baru
        return {
          ...state,
          carts: filteredCart, // state carts diisi dengan array of object yang baru
          totalPrice: state.totalPrice + parseInt(newCartObj.productPrice),
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

    default:
      return state;
  }
}
