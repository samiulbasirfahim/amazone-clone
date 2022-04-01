import React from "react"
import "./product.css"


const Product = (props) => {
	const { img, name, price, seller, ratings,id } =props.product
	return (
		<div className="product">
			<img width="286px" height="286px" src={img} alt="" />
			<div className="product-info">
				<div>
					<p id="name-pd">{name}</p>
					<p>Price: ${price}</p>
				</div>
				<br />
				<div>
					<p>Manufacturer: {seller}</p>
					<p>Rating: {ratings}</p>
				</div>
			</div>
			<button onClick={()=>props.addToCart(props.product)} className="addToCartBtn"><p className="btn-text">Add to cart</p></button>
		</div>
	)
}

export default Product
