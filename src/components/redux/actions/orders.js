import uuid from "uuid";

// ADD_LIST to orders
export const addList = (shoppingList, callback) => {
  return (dispatch) => {
      dispatch({
          type: 'ADD_LIST',
          list: {
              id: uuid(),
              list: shoppingList,
          }
      });
      if (callback) {
          callback();
      }
  };
};
// DELETE_ORDERS
export const deleteOrders=()=>({
  type: 'DELETE_ORDERS'
})