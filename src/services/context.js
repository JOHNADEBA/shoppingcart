import React, { useContext,  useEffect, useReducer } from "react";
import { data } from "./data";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
	allItems: data,
	total: 0,
	amount: 0,
};




const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};

	const removeItem = (id) => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};

    const increDecreCount = (id, eventType) =>{
       dispatch({type: 'INCRE_DECRE', payload:{id, eventType}})
    }

    useEffect(() => {
        dispatch({type:'TOTAL'})
       
    
    //   return () => {
    //     second
    //   }
    }, [state.allItems ])

	return (
		<AppContext.Provider value={{ ...state, clearCart, removeItem, increDecreCount }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
