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

	handleClickMe(event) {
		console.log(event.target);
	}

	render() {
		return (
			<>
				this is web page {this.state.name}
				<button onClick={this.handleClickMe}>Click me</button>
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
