import {ADD_TO_MY_LIST,DELETE_FROM_MY_LIST} from './actionTypes'

export const addToMyList = (data)=>({
    type: ADD_TO_MY_LIST,
    payload:data
})

export const deleteMylistPokemon = (newData,newOwned)=>({
        type:DELETE_FROM_MY_LIST,
        payload:{newData,newOwned}
    })



