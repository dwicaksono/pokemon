import React,{lazy} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from "styled-components"
import pokeBall from '../../assets/images/loading.gif'
import CardList from "../../components/CardList"
import InputTextWithButton from '../../components/InputTextWithButton'
import Button from '../../particel/Button'
import { fetchAllPokemons, fetchNextPreviousPokemons, searchPokemon, startLoading } from '../../redux/actions/pokemonListDataAction'
import Swal from 'sweetalert2'

// const AvatarComponent = lazy(() => import('./AvatarComponent'));
const Home = () => {
const dispatch = useDispatch()
const {next,previous,listPokemon,isLoading}= useSelector(state=>state.listPokemon)

const [searchInputText,setSeacrhInputText] =  React.useState("")

let history = useHistory()

	React.useEffect(() => {
		dispatch(fetchAllPokemons())
	}, [dispatch])

	const details = (data) =>{
		let arr = data.split('/')
		const id = arr[arr.length-2]
		history.push(`/pokemon-detail/${id}`)
	}

	const realNextPage = () =>{
		
		dispatch(fetchNextPreviousPokemons(next))
	}

	const nextPage = () =>{
		dispatch(startLoading())
		setTimeout(()=>realNextPage(),1000)
	}

	const realBacktPage = () =>{
		dispatch(fetchNextPreviousPokemons(previous))
	}
	const backPage =()=>{
		dispatch(startLoading())
		setTimeout(()=>realBacktPage(),1000)
	}

	const searchInput = (e) =>{
		e.preventDefault()
		setSeacrhInputText(e.target.value)
	}
	const searchHandler = () =>{
		if(searchInputText !== ''){			
			dispatch(searchPokemon(searchInputText))
		}
		if(searchInputText === ''){
			Swal.fire(
				'please fill in the search field',
			  )
			dispatch(fetchAllPokemons())
		}
	}
	
	
    return (
			<>
    <InputTextWithButton placeholder="Seacrh name of pakemon" title="search" onChange={(e)=>searchInput(e)} onClick={searchHandler}/>
      <Container>
				{
					isLoading === true ? (
						<img src={pokeBall} widt={100} alt="pokeball loading"/>
					):(
						// {
							listPokemon?.length > 0 ? listPokemon.map(
								(pok,idx)=>(
									<CardList key={idx+1} data={pok} onClick={()=>details(pok.url)}/>
								)
							):(
								<div>no data...</div>
							)
						// }
					)
				}

      </Container>
				<div>
					{previous && 
						<Button title="Back" onClick={backPage}/>
					}
					{next && 
					<Button title="Next" onClick={nextPage}/>
					}
				</div>
			</>
    );
  }

export default Home;


  const Container = styled.div`
		display:flex;
		flex-wrap:wrap;
		padding:0 50px;
		align-items:center;
		align-content:center;
		justify-content:center;
		width:80%;
  `