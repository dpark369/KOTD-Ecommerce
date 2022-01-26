import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { productData } from '../productData';

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
	font-weight: 200;
	${mobile({ fontSize: '1.7rem' })}
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 35px;
	${mobile({ fontSize: '24px' })}
`;

const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	${mobile({ width: '100%' })}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;

const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;

	&:hover {
		background-color: #7ac4ad;
	}
`;

const ProductPage = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src='https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80' />
				</ImgContainer>
				<InfoContainer>
					<Title>Air Jordan 1 Retro High OG 'Royal Toe'</Title>
					<Desc>
						"When the Air Jordan 1 arrived in '85, it was with rule-breaking bravado. The banned black-red colorway violated the league's
						uniform policy and resulted in a $5,000 fine from the NBA each time Michael Jordan wore sneakers. Thus the legacy began.
						Jordan's rookie campaign in 1984-85 finished with His Airness averaging 28.2 points per game to earn All-Star and Rookie of the
						Year honors." --Flight Club
					</Desc>
					<Price>$ 350</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>8</FilterSizeOption>
								<FilterSizeOption>9</FilterSizeOption>
								<FilterSizeOption>10</FilterSizeOption>
								<FilterSizeOption>11</FilterSizeOption>
								<FilterSizeOption>12</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductPage;
