# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Branch Structure
Main branches: 
- **`dev`**: for **merging new features and bug fixes**.
- **`main` (prev `master`)**: used only for **releases**

Auxiliary branches:
- **`feature`**: **new modules or use cases**.
eg: `feature/support-dark-theme`
- **`bugfix`**: to **fix** changes **rejected on a feature**.
eg: `bugfix/more-gray-shades`
- **`hotfix`**: **patches** or config changes. **can skip testing phase**.
eg: `hotfix/increase-scaling-threshold`
- **`merge`**: temporary for **resolving conflicts**.
eg: `merge/combined-device-support`
- **`experimental`** to test new features or **ideas**.
eg: `experimental/dark-theme-support`

> Once done, all **auxiliary branches will have `done` added as a prefix**.
eg: `done/feature/support-dark-theme`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.