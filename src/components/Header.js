import { FaShoppingBag } from "react-icons/fa";
import { useGlobalContext } from "../services/context";

const Header = () => {
    const {amount} = useGlobalContext()
	return (
		<header className="App-header">
			<div className="header-content">
				<h2 className="cart">Shopping Cart</h2>
				<div className="icon-container">
					<h2 className="icon">
						<FaShoppingBag />
					</h2>
					<p className="number">{amount}</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
