import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
	const { toggle, darkMode } = useContext(DarkModeContext);
	const { login, currentUser } = useContext(AuthContext);

	return (
		<div className="navbar">
			<div className="left">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span>rochasocial</span>
				</Link>
				<HomeOutlinedIcon />
				{!darkMode ? (
					<DarkModeOutlinedIcon onClick={toggle} />
				) : (
					<WbSunnyOutlinedIcon onClick={toggle} />
				)}
				<GridViewOutlinedIcon />
				<div className="search">
					<SearchOutlinedIcon />
					<input type="text" placeholder="Buscar" />
				</div>
			</div>
			<div className="right">
				<PersonOutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsOutlinedIcon />
				<div className="user">
					<img src={currentUser.profilePicture} alt="" />
					<span>{currentUser.name}</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
