// ADD_ITEM
export const addItem = (
  {
    id
  } = {}
) => ({
  type: 'ADD_ITEM',
  item: {
    id,
    amount:1,
  }
});

// REMOVE_ITEM
export const removeItem = ({ id } = {}) => ({
  type: 'REMOVE_ITEM',
  id
});

// EDIT_ITEM
export const editItem = (id, updates) => ({
  type: 'EDIT_ITEM',
  id,
  updates
});
