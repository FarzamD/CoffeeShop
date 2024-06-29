import uuid from "uuid";

// ADD_LIST to orders
export const addList = (
  shoppingList
) => ({
  type: 'ADD_LIST',
  list: {
    id: uuid(),
    list:shoppingList,
  }
});
// DELETE_ORDERS
export const deleteOrders=()=>({
  type: 'DELETE_ORDERS'
})