import React from 'react';
import { Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';

import CoursesListView from './views/courses/list';
import CoursesDetailedView from './views/courses/detailed';

const BaseRouter = () => (
	<div>
		<Route {...ROUTES.HOME} component={CoursesListView} />
		<Route {...ROUTES.COURSE_LIST} component={CoursesListView} />
		<Route {...ROUTES.COURSE_DETAIL} component={CoursesDetailedView} />
		{/* <Route {...ROUTES.LOGIN} component={Login} /> */}
	</div>
);

export default BaseRouter;
