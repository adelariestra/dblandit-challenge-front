import { get, post } from '../axios';

export async function getData() {
	const res = await get('courses');

	return res.data;
}

export async function setData(reqData) {
	return post('courses', reqData);
}

export async function getDataWithId(courseId) {
	const res = await get(`courses/${courseId}`);

	return res.data;
}