import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { Navigate } from 'react-router-dom';
// import Login from './Login';

const GuidedRoute = ({ children }) => {
	const isLogin = localStorage.getItem('token_user');
	if (!isLogin) {
		// user is not authenticated
		return <Navigate to="/login" />;
	}
	return children;
};

export default GuidedRoute;
