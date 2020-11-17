import { DETAIL_DATA_POKEMON, GET_ALL_POKEMON_DATA, LOADING_POKEMON_FINISH, LOADING_POKEMON_START, SET_DATA_SEARCH_POKEMON_NAME } from './actionTypes'


export const getAllPokemon = (data)=>({
    type:GET_ALL_POKEMON_DATA,
    payload:data
})
export const startLoading = ()=>({
	type: LOADING_POKEMON_START
})
export const finishLoading = ()=>({
	type: LOADING_POKEMON_FINISH
})

export const fetchAllPokemons = () => async(dispatch,getState)=>{

		dispatch(startLoading())
    try{
			let res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12`)
			const data =  await res.json()
    if(res.status === 200){
        dispatch(getAllPokemon(data))
    }
    }catch(error){
			dispatch(finishLoading())
        console.log(error)
    }
}

export const fetchNextPreviousPokemons = (data) =>{
	return async(dispatch,getSate) =>{
			dispatch(startLoading())
			try{
				let res = await fetch(data)
				let dataNext = await res.json()
				if(res.status === 200){
					dispatch(getAllPokemon(dataNext))
				}
			}catch(error){
				dispatch(finishLoading())
				console.log(error)
			}
	}
}


export const setDataSearch = (data) => ({
	type:SET_DATA_SEARCH_POKEMON_NAME,
	payload:data
})

export const searchPokemon = (data) =>{
	return async(dispatch,getSate) => {
		dispatch(startLoading())
		try{
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${data}`)
			const dataSearch = await res.json()
			let newData =  {...dataSearch.species}
			if(res.status ===  200){				
				dispatch(setDataSearch([newData]))
			}else{
				dispatch(finishLoading())
			}
		}catch(error){
			dispatch(finishLoading())
			console.log(error)
		}
	}
}

export const setDataDetailPokemon = (data) =>({
	type: DETAIL_DATA_POKEMON,
	payload:data
})
export const fetchPokemonDetail = (id) => async(dispatch,getStat) => {
	dispatch(startLoading())

	try{
		const res =  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		const data = await res.json()

		let newMoves = [...data.moves]
		let movesName = newMoves.map(pok => pok.move.name)
		
		let image = data.sprites.other["official-artwork"].front_default
		let dataDetail = {
			id:data.id,
			name:data.name,
			type:data.types[0].type.name,
			weight:data.weight,
			moves:movesName,
			image:image
		}

		if(res.status === 200){
			dispatch(setDataDetailPokemon(dataDetail))
		}else{
			
			dispatch(finishLoading())
		}
	}catch(error){
		dispatch(finishLoading())
		console.log(error)
	}
}