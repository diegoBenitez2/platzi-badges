import React from "react";
import "./styles/BadgeNew.css";
import NavBar from "../components/NavBar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BagdeForm from "../components/BadgeForm";
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
		const nextForm = this.state.form;
		nextForm[e.target.name] = e.target.value;

		this.setState({
			form: nextForm,
		});
	};
	render() {
		return (
			<div>
				<NavBar />
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="logo" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.FirstName}
								lastName={this.state.form.LastName}
								twitter={this.state.form.Twitter}
								jobTitle={this.state.form.JobTitle}
								avatar="https://s.gravatar.com/avatar/de86a8a8fc9dac4767cbc9d8b5cf1fbc?s=80"
							/>
						</div>
						<div className="col-6">
							<BagdeForm
								onChange={this.handleChange}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeNew;
