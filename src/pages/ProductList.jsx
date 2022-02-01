import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router';
import { useState } from 'react';

const Container = styled.div``;

const Title = styled.h1`
	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
	${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option``;

const ProductList = () => {
	const location = useLocation();
	const category = location.pathname.split('/')[2];
	// Filters
	const [filters, setFilters] = useState({});
	const handleFilters = (event) => {
		const value = event.target.value;
		setFilters({
			...filters,
			[event.target.name]: value,
		});
	};
	// Sort
	const [sort, setSort] = useState('newest');
	const handleSort = (event) => {
		setSort(event.target.value);
	};
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>{category.toUpperCase()}</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select name='color' onChange={handleFilters}>
						<Option disabled>Color</Option>
						<Option>white</Option>
						<Option>black</Option>
						<Option>gray</Option>
						<Option>red</Option>
						<Option>blue</Option>
						<Option>yellow</Option>
						<Option>green</Option>
						<Option>pink</Option>
					</Select>
					<Select name='size' onChange={handleFilters}>
						<Option disabled>Size</Option>
						<Option>8</Option>
						<Option>9</Option>
						<Option>10</Option>
						<Option>11</Option>
						<Option>12</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select onChange={handleSort}>
						<Option value='newest'>Newest</Option>
						<Option value='asc'>Price (asc)</Option>
						<Option value='desc'>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products category={category} filters={filters} sort={sort} />

			<Footer />
		</Container>
	);
};

export default ProductList;
