import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import Context from "./Context";

function App() {
	const [userId, setUserId] = useState(0);
	const { getData, user, posts } = useContext(Context);

	useEffect(() => {
		getData(userId);
	}, [userId]);

	return (
		<div className="App">
			<h1>HELLOOO!!!!</h1>
			<input
				type="number"
				onChange={(e) => setUserId(e.target.value)}
				placeholder="Enter the user id"
			/>
			<div>
				<h5>{JSON.stringify(user, null, 4)}</h5>
			</div>
			<div>
				{posts.map((post) => (
					<h4>{JSON.stringify(post, null, 4)}</h4>
				))}
			</div>
		</div>
	);
}

export default App;
