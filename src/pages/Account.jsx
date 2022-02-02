import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Account from '../components/Account';

import styled from 'styled-components';
import { mobile } from '../responsive';

// Todo - Make Account page
const Popular = styled.div`
	font-size: 2.5rem;
	text-align: center;
	${mobile({ fontSize: '1.5rem' })}
`;
const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Account />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
