import React from "react"
import './product.css'

const Product = ({ product }) => {
	const { img, name, price, seller } = product
	return (
		<div className="product">
			<img width="286px" height="286px" src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <p>Manufactarer: {seller}</p>
		</div>
	)
}

export default Product
