import { addList } from './orders';
import { deleteShoppingList } from './list';

export const buyItems = (shoppingList) => {
    return (dispatch) => {
        dispatch(addList(shoppingList, () => {
            dispatch(deleteShoppingList());
        }));
    };
};
