import useCartStore from '../store/cartStore'

export const CartItens = () => {
	const itens = useCartStore(state => state.cart)
	const removeFromCart = useCartStore(state => state.removeFromCart)

	return (
		<div>
			<h2>Carrinho</h2>
			<ul>
				{itens.map(item => (
					<li key={item.id}>
						{item.name} - R${item.price}
						<button
							onClick={() => {
								removeFromCart(item.id)
							}}
						>
							Remove Product
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
