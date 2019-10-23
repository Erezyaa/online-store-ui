import cartService from '../services/cart.service';
import { ADD_TO_CART } from './actions';

const initalState = {
    cartItemsCount: cartService.getAll().length
};
function reducers(state = initalState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            cartService.add(action.productId, 1);
            return {
                cartItemsCount: cartService.getAll().length
            };
        default:
            return state;
    }

}

export default reducers;