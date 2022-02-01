import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Fixes the page rendering to the bottom
export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
