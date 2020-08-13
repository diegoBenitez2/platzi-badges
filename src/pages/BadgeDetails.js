import React from "react";
import api from "../api";
import {Link} from "react-router-dom";
import confLogo from "../images/platziconf-logo.svg";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import Badge from "../components/Badge";
import './styles/BadgeDetails.css'

class BadgeDetails extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
	};

	componentDidMount() {
		this.fecthData();
	}

	fecthData = async () => {
		this.setState({ loading: true, error: null });
		try {
			const data = await api.badges.read(this.props.match.params.badgeId);
			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};
	render() {
		if (this.state.loading) {
			return <PageLoading />;
		}
		if (this.state.error) {
			return <PageError error={this.state.error} />;
		}
		const badge = this.state.data;
		return (
			<div>
				<div className="BadgeDetails__hero">
					<div class="container">
						<div class="row">
							<div className="col-6">
								<img src={confLogo} alt="Logo de la Conferencia" />
							</div>
							<div className="col-6 d-flex align-items-center BadgeDetails__hero-attendant">
								<h1>
									{badge.firstName} {badge.lastName}
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div class="container pb-4">
					<div class="row">
						<div class="col-6">
							<Badge
								firstName={badge.firstName}
								lastName={badge.lastName}
								email={badge.email}
								twitter={badge.twitter}
								jobTitle={badge.jobTitle}
							/>
						</div>
						<div class="col-6">
							<h2>Actions</h2>
							<div>
								<div>
									<Link
										className="btn btn-primary mb-4"
										to={`/badges/${badge.id}/edit`}>
										Edit
									</Link>
								</div>
								<div>
									<button className="btn btn-danger">Delete</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeDetails;
