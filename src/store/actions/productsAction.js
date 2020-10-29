import { GET_DATA, ERROR_DATA, SET_LOADING } from "../types";
import axios from "axios";

// export const getProducts = () => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       "https://run.mocky.io/v3/7be8b0a0-b9c3-4bcf-bbc9-d6ba3042afe3"
//     );
//     dispatch({
//       type: GET_DATA,
//       payload: res.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: ERROR_DATA,
//       payload: console.log(e),
//     });
//   }
// };

export const getProductsAsync = () => (dispatch, getState) => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });

  return axios
    .get("https://run.mocky.io/v3/de4bd7be-f955-4eb3-b4a3-acca7c3d8106")
    .then((res) => {
      dispatch({
        type: GET_DATA,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR_DATA,
        payload: console.log(err),
      });
    })
    .finally(() => {
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    });
};
