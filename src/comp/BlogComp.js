import React from 'react';
import news_1 from "../assets/poster.jpg";
import { CryptocurrencyMarket } from "react-tradingview-embed";

const BlogComp = () => {
	return (
		<div className="blog_comp">
				
			<div className="blog_grid">

				<div className="grid_comp">
					<img src={news_1} alt="" />
					<p>Buy Crypto in India on CoinHopper</p>
				</div>
				<div className="grid_comp">
					<img src={news_1} alt="" />
					<p>What Is P2P trading ?</p>
				</div>
				<div className="grid_comp">
					<img src={news_1} alt="" />
					<p>Buy and transfer cryptocurrency via CoinHopper</p>
				</div>

			</div>
			<h1>Market Trend</h1>
			<div className="cover_bottom">
				
				<div className="price_table">
					<CryptocurrencyMarket widgetProps={{"colorTheme": "light", "width": "100%"}} />	
				</div>
				<div className="bottom_line">
				<h2><a href="#">View More Markets</a></h2>
				<p> <i class="bi bi-bell"></i>
					CoinHopper Concludes 7 Promos: C98 Trade & Win, CoinHopper Super 
					Champion, NEAR and LINA Learn & Earn.
				</p>
				<p> <i class="bi bi-file-earmark-fill"></i>
					Special Notice about CoinHopper
				</p>
				<p> <i class="bi bi-file-earmark-fill"></i>
					Special Notice About CoinHopper Markets
				</p>
			</div>
			</div>
			
		</div>
		
	)
}

export default BlogComp