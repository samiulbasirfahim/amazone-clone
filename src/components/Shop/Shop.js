import React from "react"
import Product from "../Product/Product"
import "./Shop.css"
import { useEffect, useState } from "react"

const Shop = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		fetch("products.json")
			.then((r) => r.json())
			.then((data) => setProducts(data))
	}, [])
	return (
		<div className="shop-container">
			<div className="products">
				{products.map((product) => (
					<Product key={product.id} product={product}></Product>
				))}
			</div>
			<div className="summery">
				<h4>hey here order summery</h4>
			</div>
		</div>
	)
}

export default Shop
