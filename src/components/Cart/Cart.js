import React from "react"
import "./Cart.css"

const Cart = ({ cart }) => {
	let total = 0
	let shipping = 0
	let tax = 0
	let grandTotal = 0
	let quantity = 0
	console.log(cart);
	for (const ele of cart) {
		quantity = ele.quantity + quantity
		total = total + ele.price * ele.quantity
		shipping = ele.quantity * ele.shipping + shipping 
        tax = total * 0.08
        grandTotal = total + shipping + tax
	}
	return (
		<div className="cart">
			<h5>Order summery</h5>
			<p>Selected item: {quantity}</p>
			<p>Total price: {total}</p>
			<p>Total shipping Charge: {shipping}</p>
			<p>Tax: {tax.toFixed(2)}</p>
			<p className="total-price">Grand total: {grandTotal.toFixed(2)}</p>
		</div>
	)
}

export default Cart
