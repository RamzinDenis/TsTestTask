import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Main from "./Components/main";
import { AppContainer } from "./css/AppContainer";

const App: React.FC = () => {
	return (
		<AppContainer>
			<Header />
			<Main />
			<Footer>Footer</Footer>
		</AppContainer>
	);
};

export default App;
