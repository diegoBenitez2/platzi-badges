import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
class Badge extends React.Component {
	render() {
		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={confLogo} alt="Logo de la conferencia"></img>
				</div>
				<div className="Badge__section-name">
					<img
						className="Badge__avatar"
						src={this.props.avatar}
						alt="Logo de la conferencia"></img>
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
				</div>
				<div className="Badge__footer">#platzi Conf </div>
			</div>
		);
	}
}

export default Badge;
