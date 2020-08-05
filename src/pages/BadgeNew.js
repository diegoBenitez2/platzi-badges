import React from "react";
import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BagdeForm from "../components/BadgeForm";
import api from "../api";
class BadgeNew extends React.Component {
	state = {
		form: {
			FirstName: "",
			LastName: "",
			Email: "",
			JobTitle: "",
			Twitter: "",
		},
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleSubmit = async e =>{
		e.prevenDefault();
		this.setState({loading: true , error:null})
		try {
			await api.badges.create(this.state.form)
			this.setState({loading: false})
		} catch (error) {
			this.setState({loading: false, error: error})
		}
	}
	render() {
		return (
			<React.Fragment>
				<div className="BadgeNew__hero">
					<img
						className="BadgeNew__hero-image img-fluid"
						src={header}
						alt="logo"
					/>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.FirstName || "FIRST_NAME"}
								lastName={this.state.form.LastName || "LAST_NAME"}
								twitter={this.state.form.Twitter || "twitter"}
								jobTitle={this.state.form.JobTitle || "JOB_TITLE"}
								email={this.state.Email||'Email'}
							/>
						</div>
						<div className="col-6">
							<BagdeForm
								onChange={this.handleChange}
								formValues={this.state.form}
								onSubmit ={this.handleSubmit}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew;
