import useCartStore from '../store/cartStore'

export const AvailableItens = () => {
	const itens = useCartStore(state => state.availableItens)
	const addToCart = useCartStore(state => state.addToCart)

	return (
		<div>
			<h2>Produtos disponíveis</h2>
			<ul>
				{itens.map(item => (
					<li key={item.id}>
						{item.name} - R${item.price}
						<button
							onClick={() => {
								addToCart(item)
							}}
						>
							Add Product
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
