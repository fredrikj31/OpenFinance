import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App: FC = () => {
	return(
		<>
			<Routes>
				{/*<Route path="/" element={<Dashboard />} />*/}
				<Route path="login" element={<LoginPage />} />
				<Route path="signup" element={<SignupPage />} />
			</Routes>

			{() => {
				if (sessionStorage.getItem("loggedIn") === "true") {
					<h1>Dashboard :)</h1>
				} else {
					<LoginPage></LoginPage>
				}
			}}
		</>
	);
}

export default App;
