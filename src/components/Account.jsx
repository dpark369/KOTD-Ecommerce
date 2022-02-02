import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	margin: 3px;
	height: 70vh;
	position: relative;
`;
const Profile = styled.div`
	font-size: 3rem;
	left: 50%;
	top: 30%;
	transform: translateX(-50%);
	position: relative;
	text-align: center;
`;

const Button = styled.button`
	border: black solid 1px;
	padding: 10px;
	background-color: white;
	color: gray;
	cursor: pointer;
	font-weight: 600;
	position: relative;
	left: 50%;
	top: 40%;
	transform: translateX(-50%);
`;

const Account = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<Profile>Account page is coming soon!</Profile>
			<Button onClick={(e) => navigate('/')}>Go Back Home</Button>
		</Container>
	);
};

export default Account;
