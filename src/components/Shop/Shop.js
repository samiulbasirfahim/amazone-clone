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
		const exist = cart.find((pd) => pd.id === product.id)
		let newCart = []
		if (!exist) {
			product["quantity"] = 1
			newCart = [...cart, product]
		} else {
			const rest = cart.filter((pd) => pd.id !== product.id)
			product.quantity = product.quantity + 1
			newCart = [...rest, product]
		}
		setCart(newCart)
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
				matchedItem.push(match)
			}
		}
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
