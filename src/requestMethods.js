import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

//Todo- Delete the hard coded token and use REDUX
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjQ2ODMzOWYzNWRmZmMyZjE0MTYxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzU5NTQxMiwiZXhwIjoxNjQzNjgxODEyfQ.7HjUwhUmdmF8kBj7pDKRv9a_HLILxeYSa_XCwC8xnIw';

//Axios Instances

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
