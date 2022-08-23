import React, {FC} from "react";
import { Link } from "react-router-dom";

const SignupPage: FC = () => {
	return(
		<>
			<h1>Hello World</h1>
			<br />
			<Link to="/login">Login</Link>
		</>
	)
}

export default SignupPage;