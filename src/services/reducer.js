export const reducer = (state, action) => {
	if (action.type === "REMOVE_ITEM") {
		const newArr = state.allItems.filter((item) => item.id !== action.payload);
		return { ...state, allItems: newArr };
	}

	if (action.type === "CLEAR_CART") {
		return { ...state, allItems: [], amount: 0, total: 0 };
	}
	if (action.type === "INCRE_DECRE") {
		const newItem = state.allItems.map((item) => {
			if (item.id === action.payload.id) {
				let newAmt;
				if (action.payload.eventType === "up") {
					newAmt = item.amount + 1;
				} else {
					newAmt = item.amount === 1 ? 1 : item.amount - 1;
				}

				return { ...item, amount: newAmt };
			}

			return item;
		});

		return { ...state, allItems: newItem };
	}
	if (action.type === "TOTAL") {
		let sum = state.allItems.reduce((s, a) => s + a.amount, 0);

		let totalPrice = 0;
		state.allItems.forEach((item, i) => {
			totalPrice += item.price * item.amount;
		});

		return { ...state, total: Math.round(totalPrice * 100) / 100, amount: sum };
	}
};
