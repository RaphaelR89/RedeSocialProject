import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
	const { login } = useContext(AuthContext);
	const handleLogin = () => {
		login();
	};

	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<h1>Hello World</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque
						obcaecati quidem praesentium! Facere itaque fuga est illum
						necessitatibus non dolores ipsam aspernatur
					</p>
					<span>Don't you have an account?</span>
					<Link to="/register">
						<button>Register</button>
					</Link>
				</div>
				<div className="right">
					<h1>Login</h1>
					<form action="">
						<input type="text" placeholder="username" />
						<input type="password" placeholder="password" />
						<button onClick={handleLogin}>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
