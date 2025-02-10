import useCartStore from '../store/cartStore'

export const TotalItens = () => {
	const total = useCartStore(state => state.cart)
	const sum = total.reduce((acc, item) => acc + item.price, 0)
	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})

	return (
		<div>
			<h2>Total</h2>
			<span>Total de Itens: {total.length}</span>

			<h4>Total {formatter.format(sum)}</h4>
		</div>
	)
}
