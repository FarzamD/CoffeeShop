// Items Reducer

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        action.list
      ];
      case 'DELETE_LIST':
        return [];
    default:
      return state;
  }
};
