import axios from '../../apis/fakeStoreApi';


import { ActionTypes } from "../constants/action-type";


export const fetchProducts = () => async (dispatch) => {
	const response = await axios.get('/products');
	dispatch({
		type: ActionTypes.FETCH_PRODUCTS,
		payload: response.data
	})
}


export const fetchProductDetail = (id) => async (dispatch) => {
	const response = await axios
		.get(`/products/${id}`)
		.catch((err) => {
			console.log("Err: ", err);
		});
	dispatch({
		type: ActionTypes.FETCH_PRODUCT_DETAILS,
		payload: response.data
	});
}






export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products
	}
}

export const selectedProduct = (product) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: product
	}
}


export const removeSelectedProduct = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCT,
	};
};