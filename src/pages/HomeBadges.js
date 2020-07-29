import React from "react";
import platziConfLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";
import "./styles/HomeBadges.css";
class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="home__container d-flex ">
					<div className="container d-flex align-items-center justify-content-between">
						<div className="home__title">
							<img  className="mb-3"src={platziConfLogo} alt="logo-conf " />
							<h1>PRINT YOUR BADGES</h1>
							<h5> The easiest way manage your conference</h5>
							<div className= "d-flex justify-content-end pr-5" >
								<button className="btn btn-primary"> Start Now</button>
							</div>
						</div>
						<img src={astronauts} alt="" className="home__image" />
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Home;
