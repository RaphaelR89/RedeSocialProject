import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
	return (
		<div className="register">
			<div className="card">
				<div className="left">
					<h1>Rocha Social.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque
						obcaecati quidem praesentium! Facere itaque fuga est illum
						necessitatibus non dolores ipsam aspernatur
					</p>
					<span>Do you have an account?</span>
					<Link to="/login">
						<button>Login</button>
					</Link>
				</div>
				<div className="right">
					<h1>Register</h1>
					<form action="">
						<input type="text" placeholder="Username" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<input type="text" placeholder="Name" />
						<button>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
