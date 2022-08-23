import React, {FC, MouseEvent} from "react";
import { Link } from "react-router-dom";

const LoginPage: FC = () => {

	const clickEvent = (e: MouseEvent<HTMLElement>) => {
		e.preventDefault();
	}

	return(
		<>
			<h1>Login Page 😁</h1>
			<br />
			<Link to="/signup">Signup</Link>
		</>
	);
}

export default LoginPage;