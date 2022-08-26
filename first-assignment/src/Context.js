import { createContext, useState } from "react";
import axios from "axios";

const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState([]);
	const [posts, setPosts] = useState([]);
	const getData = async (userId) => {
		const userResponse = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${userId}`
		);
		const postsResponse = await axios.get(
			`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
		);

		const user = await userResponse.data;
		const posts = await postsResponse.data;

		console.log(user);
		console.log(posts);

		setUser(user);
		setPosts(posts);
	};

	return (
		<Context.Provider
			value={{
				user,
				posts,
				getData,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;
