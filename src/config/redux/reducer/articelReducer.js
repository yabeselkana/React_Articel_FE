const initialState = {
  articel: [],
  articeleDetail: [],
};

const articelReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_ARTICEL") {
    return {
      ...state,
      product: action.payload,
    };
  } else if (action.type === "GET_DETAIL_ARTICEL") {
    return {
      ...state,
      productDetail: action.payload,
    };
  } else if (action.type === "CREATE_ARTICEL") {
    return state;
  } else if (action.type === "UPDATE_ARTICEL") {
    return state;
  } else if (action.type === "DELETE_ARTICEL") {
    return state;
  } else {
    return state;
  }
};

export default articelReducer;
