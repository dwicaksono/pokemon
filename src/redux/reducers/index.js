import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage"


import myPokemonList from './myPokemonListReducer'
import listPokemon from './listPokemon'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["myPokemonList"],
  };

const rootReducer = combineReducers({
 myPokemonList,
 listPokemon
});

// export default combineReducers({myPokemonList,listPokemon})
export default persistReducer(persistConfig, rootReducer);
