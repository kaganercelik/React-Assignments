import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import Context from "./Context";

function App() {
	const [userId, setUserId] = useState(0);
	const { getData, user, posts } = useContext(Context);

	useEffect(() => {
		userId !== 0 && getData(userId);
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
				<h5>{userId !== 0 && JSON.stringify(user, null, 4)}</h5>
			</div>
			<div>
				{userId !== 0 &&
					posts.map((post, index) => (
						<h4 key={index}>{JSON.stringify(post, null, 4)}</h4>
					))}
			</div>
		</div>
	);
}

export default App;
