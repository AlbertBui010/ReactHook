import React from 'react';

class DisplayInfo extends React.Component {
	render() {
		const { name, age } = this.props;

		return (
			<div>
				<div>My name is {name}</div>
				<div>Age: {age}</div>
				<div>Address: HCMC</div>
			</div>
		);
	}
}

export default DisplayInfo;
