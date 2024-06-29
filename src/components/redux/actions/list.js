// ADD_ITEM to list
export const addItem2L = (
  id=''
) => ({
  type: 'ADD_ITEM_2_LIST',
  item: {
    id,
    amount:1,
  }
});

// REMOVE_ITEM to list
export const removeItem2L = ( id ) => ({
  type: 'REMOVE_ITEM_2_LIST',
  id
});

// EDIT_ITEM to list
export const editItem2L = (id, updates) => ({
  type: 'EDIT_ITEM_2_LIST',
  id,
  updates
});

export const deleteShoppingList=()=>({
  type: 'DELETE_LIST'
})