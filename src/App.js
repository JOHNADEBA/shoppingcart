import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import { useGlobalContext } from "./services/context";


function App() {
	const { allItems } = useGlobalContext();

	if (allItems.length === 0) {
		return (
      <div className="App">
      <Header />
				<h2 className="loading">NO SELECTED ITEM</h2>
			</div>
		);
	}
	return (
		<div className="App">
			<Header />

			<div></div>
			<Items />
			<Footer />
		</div>
	);
}

export default App;
