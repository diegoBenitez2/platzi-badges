import React from "react";
import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BagdeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";
class BadgeNew extends React.Component {
	state = {
		loading: false,
		error: null,
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
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

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ loading: true, error: null });
		try {
			await api.badges.create(this.state.form);
			this.setState({ loading: false });
			// busca en el historia una pagina en especifico
			this.props.history.push("/badges");
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};
	render() {
		if (this.state.loading === true) {
			return <PageLoading />;
		}
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
								firstName={this.state.form.firstName || "FIRST_NAME"}
								lastName={this.state.form.lastName || "LAST_NAME"}
								twitter={this.state.form.twitter || "TWITTER"}
								jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
								email={this.state.form.email || "EMAIL"}
							/>
						</div>
						<div className="col-6">
							<BagdeForm
								onChange={this.handleChange}
								formValues={this.state.form}
								onSubmit={this.handleSubmit}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew;
