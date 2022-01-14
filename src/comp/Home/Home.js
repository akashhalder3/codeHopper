import React from 'react'
import HeaderComp from "../HeaderComp";
import CoverComp from "../CoverComp";
import BlogComp from "../BlogComp";

import FaqComp from "../FaqComp";
import FooterComp from "../FooterComp";

const Home = () => {
	return (
		<div className="app">
			<HeaderComp />
			<CoverComp/>
			<BlogComp />
			<FaqComp />
		    <FooterComp /> 
		</div>
	)
}

export default Home;