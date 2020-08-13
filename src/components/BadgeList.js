import React from "react";
import "./styles/BadgeList.css";
import { Link } from "react-router-dom";
import Gravatar from "./gravatar";

class BadgeListItem extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Gravatar
					className="img-fluid badge__list-img-avatar"
					email={this.props.badge.email}
					alt="imagen de la lista"
				/>
				<div className="container-fluid">
					<p className="badge__firstName">
						{this.props.badge.firstName} {this.props.badge.lastName}
					</p>
					<a href="https://github.com/Sparragus/platzi-badges/blob/master/src/pages/styles/Badges.css">
						{this.props.badge.twitter}
					</a>
					<p>{this.props.badge.jobTitle}</p>
				</div>
			</React.Fragment>
		);
	}
}

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
			<div className="BadgeList">
				<ul className="badge__container">
					{this.props.badgeList.map((badge) => {
						return (
							<li key={badge.id} className="container-fluid badge__list">
							<Link className= "text-reset text-decoration-none d-flex" to ={`/badges/${badge.id}`}>
								<BadgeListItem badge={badge} />
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default BadgeList;
