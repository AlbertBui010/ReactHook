import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';
import UserInfo from './components/UserInfo';
import DisplayInfo from './components/DisplayInfo';

class App extends React.Component {
	render() {
		return (
			<>
				<div>
					<UserInfo />
				</div>
				<div style={{ marginTop: '24px' }}>
					<DisplayInfo name="Albert Bui" age="20" />
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
