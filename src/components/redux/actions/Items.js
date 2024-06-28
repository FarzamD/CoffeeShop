import uuid from 'uuid';

// ADD_ITEM
export const addItem = (
  {
    name ='',
    description = '',
    amountSold = 0,
    img='',
    type=''
  } = {}
) => ({
  type: 'ADD_ITEM',
  item: {
    id: uuid(),
    name,
    description,
    amountSold,
    img,
    type
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
