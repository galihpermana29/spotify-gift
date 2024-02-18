import { useState } from 'react';
import { useNavigate } from 'react-router';
import logo from './assets/logo.png';
const Login = () => {
	const navigate = useNavigate();
	const [isWrong, setIsWrong] = useState(false);
	const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		if (email === 'widya@spotify.com' && password === 'galihpermana') {
			localStorage.setItem('token_user', 'eyAS203920329012222');
			navigate('/');
		} else {
			setIsWrong(true);
		}
	};
	return (
		<div className="h-screen bg-black flex justify-center items-center ">
			<div className="flex flex-col items-center max-w-[500px] w-full rounded-md py-6 space-y-5">
				<img src={logo} alt="logo" className="max-w-[150px]" />
				<h2 className="text-white text-3xl font-bold">Log In to Continue.</h2>
				<p className="text-gray-300 text-center text-xs max-w-[350px]">
					Before you log in into this website, please make sure you open this
					website using google chrome browser or other browser except safari!! i
					repeat, except safari
				</p>
				<form
					onSubmit={handleLogin}
					className="flex flex-col w-full max-w-[350px] space-y-3">
					<input
						type="email"
						name="email"
						id="email"
						className="h-[50px] bg-gray-500 rounded-md p-2"
					/>
					<input
						type="password"
						name="password"
						id="password"
						className="h-[50px] bg-gray-500 rounded-md p-2"
					/>
					<button
						className="bg-white font-bold text-black p-[15px] rounded-3xl"
						type="submit">
						Log In
					</button>
				</form>
				{isWrong && (
					<p className="text-white">
						wrong password!!! you are not my gf, please go away!!!
					</p>
				)}
			</div>
		</div>
	);
};

export default Login;
