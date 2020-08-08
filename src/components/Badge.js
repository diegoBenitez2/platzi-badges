import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
import Gravatar from "./gravatar";
class Badge extends React.Component {
	render() {
		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={confLogo} alt="Logo de la conferencia"></img>
				</div>
				<div className="Badge__section-name">
					<Gravatar
						className="Badge__avatar"
						email={this.props.email}
						alt="	Avatar"
					/>
					<div>
						<h1>
							{this.props.firstName} <br />
						</h1>
						<h1>
							{this.props.lastName} <br />
						</h1>
					</div>
				</div>

				<div className="Badge__section-info">
					<p>{this.props.jobTitle}</p>
					<p>{this.props.twitter}</p>
					<p>{this.props.email}</p>
				</div>
				<div className="Badge__footer">#platzi Conf </div>
			</div>
		);
	}
}

export default Badge;
