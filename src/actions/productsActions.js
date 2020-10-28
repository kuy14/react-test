import { GET_DATA, ERROR_DATA } from "../types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://run.mocky.io/v3/75590491-d4fc-49b8-8312-a01d6bd9255b"
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
