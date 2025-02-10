import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import useCartStore from './store/cartStore.ts'

useCartStore.subscribe(state => {
	console.log(state)
})
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
