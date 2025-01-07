import { legacy_createStore } from 'redux';
import { reducer1, reducer2} from './Reducer';


// Manual combining of reducers
export const reducer = (state = {}, action) => ({
  counter1: reducer1(state.counter1, action),
  counter2: reducer2(state.counter2, action),
});

export const Store = legacy_createStore(reducer);
