import { get, post } from '../axios';

export async function getData(params) {
	const res = await get('courses', params);

	return res.data;
}

export async function setData(reqData) {
	return post('courses', reqData);
}

export async function getDataWithId(courseId) {
	const res = await get(`courses/${courseId}`);

	return res.data;
}

export async function postNewStudent(courseId,reqData) {
	const res = await post(`courses/${courseId}/students`,reqData);

	return res.data;
}