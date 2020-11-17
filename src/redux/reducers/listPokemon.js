import {GET_ALL_POKEMON_DATA,LOADING_POKEMON_FINISH,LOADING_POKEMON_START,SET_DATA_SEARCH_POKEMON_NAME,DETAIL_DATA_POKEMON} from "../actions/actionTypes";


const initialState = {
    isLoading:false,
    count:0,
    next:null,
    previous:null,
		listPokemon:null,
		detailPokemon:{
			id:'',
			name:'',
			weight:'',
			type:'',
			moves:[],
			image:''
		}
};


const listPokemon = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOADING_POKEMON_START:
			return{
				...state,
				isLoading:true
			};
		case LOADING_POKEMON_FINISH:
			return{
				...state,
				isLoading:false
			};
		case GET_ALL_POKEMON_DATA:
			return {
				...state,
				count:payload.count,
				next:payload.next,
				previous:payload.previous,
				listPokemon:payload.results,
				isLoading: false,
			};
			case SET_DATA_SEARCH_POKEMON_NAME:
				return{
					...state,
					isLoading:false,
					count: 0,
					next:null,
					previous:null,
					listPokemon : payload
				};
				case DETAIL_DATA_POKEMON:
					return{
						...state,
						isLoading:false,
						detailPokemon:payload
					}
		default:
			return state;
	}
};

export default listPokemon