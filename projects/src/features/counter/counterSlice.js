import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// let obj = {
//     name: "auth",
//     initialState: initialState,
//     reducers: {
//         'add': (a, b) => { return a + b },
//         'sub': (a, b) => { return a - b }
//     }
// }

// counterSlice = createSlice(obj)

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // logout: (state) => {
    //     return {...state, loggedInUser: null}
    // },
    incrementing: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
  },
});

// counterSlice = {
//     'actions': something,
//     'reducer': something else
// }

// Action creators are generated for each case reducer function
export const { incrementing, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;

// increment = counterSlice.actions.increment
// increment = counterSlice.actions.increment
// increment = counterSlice.actions.increment

// reducer
// increment //action
// decrement //action
// incrementByAmount //action

// import x from counterSlice

// import {increment} from counterSlice
