import React from 'react';
import logo from "../assets/coinhopper.png";
import "../App.css";

const HeaderComp = () => {
	return (
		<div className="header">
			<div className="left_header header">
				<img src={logo} alt="logo"/>
				<h3><a href="/trade">Buy Crypto</a></h3>
				<h3><a href="/trade">Markets</a></h3>
				<h3><a href="/trade">Trades</a></h3>
			</div>

			<div className="right_header header">
				<button className="grey_button yellow_button">Login</button>
				<button className="yellow_button ">Connect To Wallet</button>
			</div>
		</div>
	)
}

export default HeaderComp