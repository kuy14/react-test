import { GET_DATA, ERROR_DATA } from "../types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://run.mocky.io/v3/5b878711-c8d6-44d9-bb52-2e546de8ba9e"
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
