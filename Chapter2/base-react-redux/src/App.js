import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';

class App extends React.Component {
	state = {
		name: 'Bui Quang Quy',
		address: 'HCMC',
		age: '21',
	};

	handleClickMe = (event) => {
		this.setState({
			name: 'Albert Bui',
		});
	};

	handleOnChangeInput = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	handleOnSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<>
				this is web page {this.state.name}
				<button onClick={(event) => this.handleClickMe(event)}>Click me</button>
				<div>
					<form onSubmit={(event) => this.handleOnSubmit(event)}>
						<input onChange={(event) => this.handleOnChangeInput(event)} type="text" />
						<button>Submit</button>
					</form>
				</div>
			</>
		);
	}
}

// const App = () => {
// 	const count = useSelector((state) => state.counter.count);
// 	const dispatch = useDispatch();

// 	return (
// 		<div className="App">
// 			{/* <header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<div>Count = {count}</div>
// 				<button onClick={() => dispatch(increaseCounter())}>Increase</button>
// 				<button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
// 			</header> */}
// 			<MyComponent />
// 		</div>
// 	);
// };

export default App;
