import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

import {persistStore} from 'redux-persist'

const middlewares = [thunk]

 const store = createStore(rootReducer,applyMiddleware(...middlewares))

 const persistor = persistStore(store)

export  {store,persistor}