import { useEffect, useState } from "react"
import { loadDb } from "../utilities/fakedb"

const useCart = (products) => {
	const [cart, setCart] = useState([])

	useEffect(() => {
		const storedCart = loadDb()
		const matchedArray = []
		for (const id in storedCart) {
			const matched = products.find((product) => product.id === id)
			if (matched) {
				matched.quantity = storedCart[id]
				matchedArray.push(matched)
			}
            setCart(matchedArray)
		}
	}, [products])

	return [cart, setCart]
}

export default useCart
