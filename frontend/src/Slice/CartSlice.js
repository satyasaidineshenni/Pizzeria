import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    ingredients: [],
    ingredientsSum: 0,
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (!item) {
        // action.payload.quantity += 1;
        state.items.push(action.payload);
      }
    },
    addIngredient: (state, action) => {
      console.log(action.payload);
      const item = state.ingredients.find(
        (item) => item.id === action.payload.id
      );
      // console.log(item);
      if (item === undefined) {
        state.ingredients.push(action.payload);
        state.totalAmount += action.payload.price;
      }
    },
    addIngredientprice: (state, action) => {
      // console.log(action.payload);
      const item = state.ingredients.find(
        (item) => item.tname === action.payload.tname
      );
      if (item !== undefined) state.ingredientsSum += item.price;
    },
    calculateTotalAmount: (state, action) => {
      const s = state.items.reduce((sum, val) => sum + val.price, 0);
      state.totalAmount = s;
    },
    deleteItem: (state, action) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      const filteredArray = state.items.filter(
        (item) => item.name !== action.payload.name
      );
      if (item["quantity"] > 0) {
        state.totalAmount -= item.price * item["quantity"];
        // item["quantity"] = -1;
      } else {
        state.totalAmount += item.price * item["quantity"];
      }
      state.items = filteredArray;
    },
    deleteIngredient: (state, action) => {
      const item = state.ingredients.find(
        (item) => item.id === action.payload.id
      );
      state.ingredientsSum -= action.payload.price;
      const filterArray = state.ingredients.filter(
        (item) => item.id !== action.payload.id
      );
      state.ingredients = filterArray;
    },
    clearcart: (state, action) => {
      state.items = [];
      state.totalAmount = 0;
      state.ingredients = [];
      state.ingredientsSum = 0;
    },
    increment: (state, action) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (item !== undefined) {
        if (item["quantity"] !== undefined) {
          state.totalAmount = state.totalAmount + item.price;
          item["quantity"] += 1;
        } else {
          item["quantity"] = 1;
        }

        console.log(item);
      } else {
        item["quantity"] = 1;
        // state.totalAmount = 0;
        // state.totalAmount -= item.price;
      }
    },
    decrement: (state, action) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (item["quantity"] > 0) {
        item["quantity"] -= 1;
        state.totalAmount -= item.price;
      } else {
        // item["quantity"] = 0;
        item["quantity"] = 0;
        // state.totalAmount -= item.price;
      }

      console.log(item);

      // state.incdec = item["quantity"];
    },
  },
});
export default CartSlice.reducer;
export const {
  addItem,
  calculateTotalAmount,
  deleteItem,
  clearcart,
  increment,
  decrement,
  addIngredient,
  addIngredientprice,
  deleteIngredient,
} = CartSlice.actions;
