import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products/:category' element={<ProductList />} />
				<Route path='/product/:id' element={<ProductPage />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
