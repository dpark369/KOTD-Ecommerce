import { GitHub, LinkedIn, MailOutline, Phone, Room, Web } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	display: flex;
	background-color: rgba(122, 196, 173, 0.2);
	${mobile({ flexDirection: 'column' })};
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
	margin: 20px 0px;
	font-family: 'Times New Roman', Times, serif;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;
const Link = styled.a`
	color: #000;
`;
const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: 'none' })}
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
	font-family: 'Times New Roman', Times, serif;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	font-family: 'Times New Roman', Times, serif;
`;

const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>KOTD.</Logo>
				<Desc>This is a project website by Daniel Park. I used React.js for the frontend.</Desc>
				<SocialContainer>
					<SocialIcon>
						<Link href='https://github.com/dpark369'>
							<GitHub />
						</Link>
					</SocialIcon>
					<SocialIcon>
						<Link href='https://www.linkedin.com/in/dpark369/'>
							<LinkedIn />
						</Link>
					</SocialIcon>
					<SocialIcon>
						<Link href='https://www.danielpark.tech/'>
							<Web />
						</Link>
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: '10px' }} /> 123 Dev, Elk Grove Village, IL 60007
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: '10px' }} /> + 224 123 1234 Fake Number
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: '10px' }} /> dpark369@gmail.com
				</ContactItem>
				<Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
			</Right>
		</Container>
	);
};

export default Footer;
