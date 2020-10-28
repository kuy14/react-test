import { GET_DATA, ERROR_DATA } from "../types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://run.mocky.io/v3/7be8b0a0-b9c3-4bcf-bbc9-d6ba3042afe3"
    );
    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_DATA,
      payload: console.log(e),
    });
  }
};
