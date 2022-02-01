import { Link } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const divStyle = {
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '2rem',
};

const iconStyle = {
	fontSize: '5rem',
	margin: '2rem',
};
const Cancel = () => {
	return (
		<div style={divStyle}>
			<SentimentVeryDissatisfiedIcon style={iconStyle} />
			Something went wrong... Order was not successful
			<Link to={'/'}>
				<button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
			</Link>
		</div>
	);
};

export default Cancel;
