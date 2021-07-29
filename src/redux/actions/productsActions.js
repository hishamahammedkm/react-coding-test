import axios from "../../api/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get("/products?limit=3");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await axios.get(`/products/${id}`);
  dispatch({ type: ActionTypes.ADD_NEW_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const deleteTab = (tab) => {
  return {
    type: ActionTypes.DELETE_TAB,
    payload:tab
  };
};

export const setLoading = (value) => {
  return {
    type: ActionTypes.LOADING,
    payload:value
  };
};




export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};


