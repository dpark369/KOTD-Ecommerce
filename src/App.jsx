import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Account from './pages/Account';
import ScrollToTop from './ScrollToTop';

import { useSelector } from 'react-redux';

const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products/:category' element={<ProductList />} />
				<Route path='/product/:id' element={<ProductPage />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/success' element={<Success />} />
				<Route path='/cancel' element={<Cancel />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/account' element={<Account />} />
				<Route
					path='*'
					element={
						<main style={{ padding: '1rem', textAlign: 'center', fontSize: '3rem' }}>
							<p>Error! Wrong Route</p>
						</main>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
