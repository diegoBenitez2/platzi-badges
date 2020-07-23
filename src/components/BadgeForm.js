import React from "react";
class BadgeForm extends React.Component {
	handleClick = (e) => {
		console.log("Button handleClick");
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form was submitted");
		console.log(this.state);
	};
	render() {
		return (
			<div>
				<h1>New Attenndant</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>First Name</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="FirstName"
							value={this.props.formValues.FirstName}></input>
					</div>
					<div className="form-group">
						<label>LastName</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="LastName"
							value={this.props.formValues.LastName}></input>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="email"
							name="Email"
							value={this.props.formValues.Email}></input>
					</div>
					<div className="form-group">
						<label>JobTitle</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="JobTitle"
							value={this.props.formValues.JobTitle}></input>
					</div>
					<div className="form-group">
						<label>Twitter</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="Twitter"
							value={this.props.formValues.Twitter}></input>
					</div>
				</form>
				<button
					type="submit"
					onClick={this.handleClick}
					className="btn btn-primary">
					Save
				</button>
			</div>
		);
	}
}
export default BadgeForm;
