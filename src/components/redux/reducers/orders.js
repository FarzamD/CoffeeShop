// Items Reducer

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      console.log('action.list',action.list)
      console.log('new orders',[
        ...state,
        action.list
      ])
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
