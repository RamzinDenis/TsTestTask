import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Main from "./Components/main";

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer>Footer</Footer>
		</>
	);
};

export default App;
