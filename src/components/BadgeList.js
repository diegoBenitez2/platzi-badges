import React from "react";
import "./styles/BadgeList.css";
import { Link } from "react-router-dom";
import Gravatar from './gravatar'

class BadgeList extends React.Component {
	render() {
		if (this.props.badgeList.length === 0) {
			return (
				<div>
					<h3>No Badges were Found</h3>
					<Link className="btn btn-primary" to="/badges/new">
						Create a new Badge
					</Link>
				</div>
			);
		}
		return (
			<ul className="badge__container">
				{this.props.badgeList.map((badge) => {
					return (
						<li key={badge.id} className="container-fluid badge__list">
							<Gravatar
								className="img-fluid badge__list-img-avatar"
								email={badge.email}
								alt="imagen de la lista"
							/>
							<div className="container-fluid">
								<p className="badge__firstName">
									{badge.firstName} {badge.lastName}
								</p>
								<a href="https://github.com/Sparragus/platzi-badges/blob/master/src/pages/styles/Badges.css">
									{" "}
									{badge.twitter}
								</a>
								<p>{badge.jobTitle}</p>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default BadgeList;
