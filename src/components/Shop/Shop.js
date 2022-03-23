import React from "react"
import Product from "../Product/Product"
import "./Shop.css"
import { useEffect, useState } from "react"
import Cart from "../Cart/Cart"
import { addToDb, loadDb } from "../../utilities/fakedb"

const Shop = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		fetch("products.json")
			.then((r) => r.json())
			.then((data) => setProducts(data))
	}, [])
	const [cart, setCart] = useState([])
	const addToCart = (product) => {
		setCart([...cart, product])
		addToDb(product.id)
	}
	useEffect(() => {
		const dataBase = loadDb()
		const matchedItem = []
		for (const id in dataBase) {
			const match = products.find((product) => product.id === id)
			if (match) {
				const quantity = dataBase[id]
				match.quantity = quantity
				console.log(quantity)
				for (let i = 0; i < quantity; i++) {
					matchedItem.push(match)
				}
			}
		}
		console.log(matchedItem)
		setCart(matchedItem)
	}, [products])

	return (
		<div className="shop-container">
			<div className="products">
				{products.map((product) => (
					<Product
						addToCart={addToCart}
						key={product.id}
						product={product}
					></Product>
				))}
			</div>
			<div className="summery">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	)
}

export default Shop
