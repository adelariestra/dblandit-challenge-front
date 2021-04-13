export const ROUTES = {
	HOME: {
		publicRoute: true,
		exact: true, // so it doesn't match first before all the other routes
		path: '/',
		basePath: ''
	},
	LOGIN: {
		publicRoute: true,
		exact: false,
		path: '/login',
		basePath: ''
	},
	COURSE_LIST: {
		publicRoute: true,
		exact: true,
		path: '/courses',
		basePath: ''
	},
	COURSE_DETAIL: {
		publicRoute: true,
		exact: true,
		path: '/courses/:courseId',
		basePath: ''
	}
};
