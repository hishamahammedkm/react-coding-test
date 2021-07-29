import { ActionTypes } from "../constants/action-types";
const intialState = {
  isLoading:false,
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return { ...state, products: [...state.products,payload],isLoading:false };
    case ActionTypes.LOADING:
      return {...state,isLoading:payload}
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };  
      case ActionTypes.DELETE_TAB:
        console.log('sssssss',payload.id);
        const index = state.products.findIndex((tab)=>tab.id === payload.id)
        let newTabs = [...state.products]
        // if tab exist in tabs
        if(index >=0){
          newTabs.splice(index,1)
        }
        state.products = newTabs
        return state
        // return { ...state, products: [...state.products,payload] };

    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    case ActionTypes.DELETE_TAB:
      return {};  
    default:
      return state;
  }
};
