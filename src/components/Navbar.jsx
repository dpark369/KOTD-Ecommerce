import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Todo align the mobile navbar better
// Todo Make logout button work

const Container = styled.div`
	height: 60px;
	${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	padding: 5px;
	${mobile({ marginLeft: '5px' })}
`;

const Input = styled.input`
	border: none;
	${mobile({ width: '50px' })}
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	text-align: center;
	${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ justifyContent: 'center' })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	text-align: center;
	margin-left: 25px;
	${mobile({ fontSize: '0.5rem', marginLeft: '10px' })}
`;

const linkStyle = {
	textDecoration: 'none',
	color: 'black',
};
const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	const user = useSelector((state) => state.user);
	return (
		<Container>
			<Wrapper>
				<Left>
					<SearchContainer>
						<Input placeholder='Search' />
						<Search style={{ color: 'gray', fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Link style={linkStyle} to={'/'}>
						<Logo>KOTD.</Logo>
					</Link>
				</Center>
				<Right>
					{user.currentUser ? (
						<div>
							<Link style={linkStyle} to={'/account'}>
								<MenuItem>ACCOUNT</MenuItem>
							</Link>
							<Link style={linkStyle} to={'/login'}>
								<MenuItem>LOG OUT</MenuItem>
							</Link>
						</div>
					) : (
						<div>
							<Link style={linkStyle} to={'/register'}>
								<MenuItem>SIGN UP</MenuItem>
							</Link>
							<Link style={linkStyle} to={'/login'}>
								<MenuItem>LOGIN</MenuItem>
							</Link>
						</div>
					)}

					<Link style={linkStyle} to={'/cart'}>
						<MenuItem>
							<Badge badgeContent={quantity} color='primary'>
								<ShoppingCartOutlined />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
