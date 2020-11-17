import {ADD_TO_MY_LIST,DELETE_FROM_MY_LIST} from "../actions/actionTypes";


const initialState = {
    isLoading:false,
		myListPokemon:[],
		owned:{}
};


const myPokemonList = (state = initialState, { type, payload }) => {
	
	switch (type) {
		
		case ADD_TO_MY_LIST:
			let newData = [...state.myListPokemon]
			
			let existingList = newData.filter(item => item.id === payload.id).concat(payload)
			let value = existingList.length
			let obj = {[existingList[0].name ]:value}
			
			return {
				...state,
				isLoading: false,
				myListPokemon:newData.concat(payload).reverse(),
				owned : {...state.owned,...obj}
			};
			
		case DELETE_FROM_MY_LIST:
			return{
				...state,
				myListPokemon:payload.newData,
				owned:payload.newOwned
			}
		
		default:
			return state;
	}
};

export default myPokemonList
 