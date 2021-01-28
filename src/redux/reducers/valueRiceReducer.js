export const RICE_STATE = {
  RICE1: "RICE1",
  RICE2: "RICE2",
  RICE3: "RICE3",
  PROCESSRICE: "PROCESSRICE"
}

var initialState = {
  [RICE_STATE.RICE1]: {},
  [RICE_STATE.RICE2]: {},
  [RICE_STATE.RICE3]: {},
  [RICE_STATE.PROCESSRICE]: {}
};

export const valueRiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case RICE_STATE.RICE1: 
      return {
        ...state,
        [RICE_STATE.RICE1]: action.value   
      }
      case RICE_STATE.RICE2: 
      return {
        ...state,
        [RICE_STATE.RICE2]: action.value   
      }
      case RICE_STATE.RICE3: 
      return {
        ...state,
        [RICE_STATE.RICE3]: action.value   
      } 
      case RICE_STATE.PROCESSRICE: 
      return {
        ...state,
        [RICE_STATE.PROCESSRICE]: action.value   
      }
    default:
      return state;
  }
}

export const riceState = (key) => state => state.valueRice[key];
