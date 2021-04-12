import { get, post } from '../axios';

export async function getData() {
	const res = await get('courses');

	return res;
}

export async function setData(reqData) {
	return post('courses', reqData);
}