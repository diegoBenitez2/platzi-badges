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
function useSearchBadge(badgeList){
	const [query, setQuery] = React.useState("");
	const [filterdBadges, setFilterBadges] = React.useState(badgeList);
	//hook de react que recibe una funcion y unis argumentos
	//primera ver coore funcion y retorna funcion
	//segunda vez revisa que los argumentos sean los mismo memoriza y la retorna
	React.useMemo(() => {
		const result = badgeList.filter((badge) => {
			return `${badge.firstName} ${badge.lastName}`
				.toLowerCase()
				.includes(query.toLowerCase());
		});
		setFilterBadges(result);
	}, [badgeList, query]);
	return {query, setQuery, filterdBadges}
}
function BadgeList(props) {
		const badgeList = props.badgeList;

const {query,setQuery, filterdBadges} = useSearchBadge(badgeList)

	if (filterdBadges.length === 0) {
		return (
			<div>
				<div className="form-group">
					<label className="d-block">Filter Badges </label>
					<input
						type="text"
						ClassName="form-control"
						value={query}
						onChange={(e) => {
							setQuery(e.target.value);
						}}
					/>
				</div>
				<h3>No Badges were Found</h3>
				<Link className="btn btn-primary" to="/badges/new">
					Create a new Badge
				</Link>
			</div>
		);
	}
	return (
		<div className="BadgeList">
			<div className="form-group">
				<label >Filter Badges </label>
				<input
					type="text"
					className="form-control"
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
				/>
			</div>
			<ul className="badge__container">
				{filterdBadges.map((badge) => {
					return (
						<li key={badge.id} className="container-fluid badge__list">
							<Link
								className="text-reset text-decoration-none d-flex"
								to={`/badges/${badge.id}`}>
								<BadgeListItem badge={badge} />
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default BadgeList;
