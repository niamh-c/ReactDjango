import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
	static propTypes = {
		endpoint: PropTypes.string.isRequired
	};

	state = {
		name: "",
		email: "",
		message: ""
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { name, email, message } = this.state;
		const emailform = { name, email, message };
		const conf = {
			method: "post",
			body: JSON.stringify(emailform),
			headers: new Headers({ "Content-Type": "applications/json" })
		};

		fetch(this.props.endpoint, conf).then(response => console.log(response));
	};

	render(){
		const { name, email, message } = this.state;
		return (
			<div className="column">
				<form onSubmit={this.handleSubmit}>

					<div className="field">
						<label className="label">Name</label>
						<div className="control">
							<input className="input" type="text" name="name"
							onChange={this.handleChange} value={name}
							required />
						</div>
					</div>

					<div className="field">
						<label className="label">Email</label>
						<div className="control">
							<input className="input" type="text" name="email"
							onChange={this.handleChange} value={email}
							required />
						</div>
					</div>

					<div className="field">
						<label className="label">Message</label>
						<div className="control">
							<textarea
							className="textarea"
							type="text"
							name="message"
							onChange={this.handleChange}
							value={message}
							required />
						</div>
					</div>

					<div>
						<button type="submit" className="button is-info">
							Send message
						</button>
					</div>

				</form>
			</div>
		);
	}
}

export default Form;
