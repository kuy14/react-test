import { GET_DATA, ADD_CART } from "../types";

const initialState = {
  products: [],
  carts: [],
  totalPrice: 0,
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
          totalPrice: state.totalPrice + parseInt(newCart[0].productPrice),
        };
      }

    default:
      return state;
  }
}
