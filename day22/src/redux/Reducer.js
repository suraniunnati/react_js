let count=0
export const reducer1 = (state = count,action) => {
    switch (action.type) {
      case 'INC':
        return state + 1;
      case 'DEC':
        return state - 1;
      default:
        return state;
    }
  };
  
  // counter2Reducer.js
  export const reducer2 = (state =count,action) => {
    switch (action.type) {
      case 'INC1':
        return state + 1;
      case 'DEC1':
        return state - 1;
      default:
        return state;
    }
  };
  