import { create } from 'zustand'
import { productList } from '../components/itens'

type Item = {
	id: number
	name: string
	price: number
}

type CartStore = {
	availableItens: Item[]
	cart: Item[]
	addToCart: (item: Item) => void
	removeFromCart: (itemId: number) => void
}

const useCartStore = create<CartStore>(set => ({
	availableItens: productList,
	cart: [],
	addToCart: item => set(state => ({ cart: [...state.cart, item] })),
	removeFromCart: (itemId: number) =>
		set(state => ({
			cart: state.cart.filter(item => item.id !== itemId),
		})),
}))

export default useCartStore
