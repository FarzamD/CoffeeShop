// Expenses Reducer

const facultiesReducerDefaultState = [];

export default (state = facultiesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_FACULTY':
      return [
        ...state,
        action.faculty
      ];
    case 'REMOVE_FACULTY':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_FACULTY':
      return state.map((faculty) => {
        if (faculty.id === action.id) {
          return {
            ...faculty,
            ...action.updates
          };
        } else {
          return faculty;
        };
      });
    default:
      return state;
  }
};
