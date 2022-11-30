import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { useGlobalContext } from "../services/context";
const Items = () => {
	const { allItems, removeItem, increDecreCount } = useGlobalContext();

	return (
		<div className="main-container">
			<h2 className="selected_item">SELECTED ITEMS</h2>
			{allItems.map((item) => {
				const { id, image, name, price, amount } = item;
				return (
					<div className="product" key={id}>
						<div className="img-cont">
							<img className="img" src={image} alt={name} />
							<div className="middle">
								<p>{name}</p>
								<p className="price">${price}</p>
								<button onClick={() => removeItem(id)}>remove</button>
							</div>
						</div>
						<div>
							<button onClick={() => increDecreCount(id,'up')}>
								<RiArrowUpSFill className="btn" />
							</button>
							<p className="amount">{amount}</p>
							<button  onClick={() => increDecreCount(id,'down')}>
								<RiArrowDownSFill className="btn" />
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Items;
