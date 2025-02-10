import './App.css'
import { AvailableItens } from './components/availableProducts'
import { CartItens } from './components/cartItens'
import { TotalItens } from './components/totalProducts'

function App() {
	return (
		<div style={{ display: 'flex', width: '100%', gap: '20px' }}>
			<AvailableItens />
			<CartItens />
			<TotalItens />
		</div>
	)
}

export default App
