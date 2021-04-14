import { get } from '../axios';

export async function getData(params) {
	const res = await get('students', params);

	return res.data;
}