 // src/app/store/reducer.ts
 import { ActionTypes } from './actions';
 

 export const initialState = {
   items: [],
   cart: []
 };
 
 export function ShopReducer(state = initialState, action: { type: any; }) {
   switch (action.type) {
     default:
       return state;
   }
 }