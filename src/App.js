
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom"
import styled from 'styled-components'
import DetailPage from "./page/DetailPage"
import Header from './components/Header'
import Home from './page/Home'
import PokemonList from './page/PokemonList'

import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store,persistor} from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Container>
      <Router>
        <PersistGate persistor={persistor}>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pokemon-list">
            <PokemonList />
          </Route>
          <Route path="/pokemon-detail/:id">
            <DetailPage />
          </Route>
        </Switch>
        </PersistGate>
      </Router>
      </Container>
    </Provider>
  );
}

export default App;

const Container = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
  flex-direction:column;
  `