import React from 'react';

class UserInfo extends React.Component {
	state = {
		name: 'A',
		age: '1',
		address: 'C',
	};

	handleOnChangeName = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	handleOnChangeAge = (event) => {
		this.setState({
			age: event.target.value,
		});
	};

	handleOnChangeAddress = (event) => {
		this.setState({
			address: event.target.value,
		});
	};

	handleOnSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<>
				<form onSubmit={(event) => this.handleOnSubmit(event)}>
					<label>Your name:</label>
					<input onChange={(event) => this.handleOnChangeName(event)} type="text" value={this.state.name} />
					<br />

					<label>Your age:</label>
					<input onChange={(event) => this.handleOnChangeAge(event)} type="number" value={this.state.age} />
					<br />

					<label>Your address:</label>
					<input onChange={(event) => this.handleOnChangeAddress(event)} type="text" value={this.state.address} />
					<br />

					<button>Submit</button>
				</form>
			</>
		);
	}
}

export default UserInfo;
