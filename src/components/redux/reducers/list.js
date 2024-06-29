// Items Reducer

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM_2_LIST':
      return [
        ...state,
        action.item
      ];
      case 'DELETE_LIST':
        return [];
      case 'REMOVE_ITEM_2_LIST':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_ITEM_2_LIST':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.updates
          };
        } else {
          return item;
        };
      });
    default:
      return state;
  }
};
