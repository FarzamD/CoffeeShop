import uuid from 'uuid';

// ADD_FACULTY
export const addFaculty = (
  {
    name = '',
    email1 = '',
    email2 = '',
    title='',
    bio = '',
    number = '',
    imgSrc = './imgs/Ali.jpg'
  } = {}
) => ({
  type: 'ADD_FACULTY',
  faculty: {
    id: uuid(),
    name,
    email1,
    email2,
    title,
    bio,
    number,
    imgSrc
  }
});

// REMOVE_FACULTY
export const removeFaculty = ({ id } = {}) => ({
  type: 'REMOVE_FACULTY',
  id
});

// EDIT_FACULTY
export const editFaculty = (id, updates) => ({
  type: 'EDIT_FACULTY',
  id,
  updates
});
