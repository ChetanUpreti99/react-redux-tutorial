import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, fetchProducts } from "../store/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
	const dispatch = useDispatch();
	/* const fetchProducts = async () => {
		const response = await axios
			.get("https://fakestoreapi.com/products")
			.catch((err) => {
				console.log("Err: ", err);
			});
		dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []); 
	*/


	useEffect(() => {
		dispatch(fetchProducts())
	}, [])
	return (
		<div className="ui grid container">
			<ProductComponent />
		</div>
	);
};

export default ProductPage;