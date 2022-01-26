import styled from 'styled-components';

const Container = styled.div`
	height: 30px;
	background-color: #7ac4ad;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
`;

const Announcement = () => {
	return <Container>Project Website. I do not actually sell shoes!</Container>;
};

export default Announcement;
