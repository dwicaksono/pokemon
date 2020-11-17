import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,useHistory } from 'react-router-dom'
import styled from 'styled-components'
import LoadingBall from '../../assets/images/loading.gif'
import Button from '../../particel/Button'
import { fetchPokemonDetail, finishLoading, startLoading } from '../../redux/actions/pokemonListDataAction'
import {addToMyList} from '../../redux/actions/myListPokemonAction'
import InputTextWithButton from '../../components/InputTextWithButton'
import Swal from 'sweetalert2'

const DetailPage = () => {
	let { id } = useParams()
	const history = useHistory()
	const dispatch = useDispatch()

	const {detailPokemon,isLoading} =useSelector(state => state.listPokemon)
	const {myListPokemon} = useSelector(state => state.myPokemonList)
	
	const [nickName,setNickName] = React.useState('')
	const [completed,setCompleted] = React.useState({win:false,lose:false,time:0,gameOver:false})
	const [saved,setSaved] = React.useState(false)


	React.useEffect(() => {
		dispatch(fetchPokemonDetail(id))
	}, [id,dispatch])
	
	const resultCatch =()=>{
		dispatch(finishLoading())
	}

	const catchPokemon = () =>{
		const rolling = Math.round(Math.random())
		if(completed.time <= 3){
			if(rolling === 1){
				setCompleted({...completed,win:true,lose:false,time:completed.time + 1,gameOver:false})
				setTimeout(()=>resultCatch(),1000)
			}else{
				setCompleted({...completed,win:false,lose:true,time:completed.time + 1,gameOver:false})
				setTimeout(()=>resultCatch(),1000)
			}
			dispatch(startLoading())
		}else{
			setCompleted({...completed,win:false,lose:false,time:completed.time + 1,gameOver:true})		
			dispatch(finishLoading())
		}
	}

	const nickNameInput = (e)=>{
		e.preventDefault()
		setNickName(e.target.value)
	}
	const saveNickName = () =>{
		// setDetailPokemon({...detailPokemon, nickName:nickName})		
		let double = myListPokemon.some(mirip => mirip.nickName === nickName)		
		if(double === true){
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'nickname already exists!',
			  })
		}else{
			let newData = {...detailPokemon,nickName:nickName}
			dispatch(addToMyList(newData))
			setSaved(true)
		}
		setNickName('')
	}

	const cancel =()=>{
		history.goBack()
		setSaved(false)
	}
	return (
		<Container>
			{isLoading === true ?
				(
					<ContainerInfoPokemon>
						<img src={`${LoadingBall}`} width={200} alt="pokemon ball"/>
					</ContainerInfoPokemon>					
				):
				(
					<>
						{completed.win && !saved ? 
							(<>
								<h1>Hey, Congratulations</h1>
								<InputTextWithButton title="save" placeholder="Nickname"
								onChange={(e)=>nickNameInput(e)} onClick={saveNickName}/>
							</>):(null
							)
						}
						{saved ? 
							(
								<Button title="DONE !!!" onClick={cancel}/>
							):(null)
						}

					{completed.lose && 
						<>
							<h1>OOPSS !!!</h1>
							<Button title="do you want to try again" onClick={catchPokemon}/>
						</>
					}
					{completed.gameOver && 
						<Button title="GAME OVER SORRY !!!" onClick={cancel}/>
					}
					
					<ContainerInfoPokemon>
							<img src={`${detailPokemon.image}`} width={200} alt="pokemon"/>
							<DetailText>
								<div>Name 	: {detailPokemon.name}</div>
								<div>Type 	: {detailPokemon.type}</div>
								<div>weight : {detailPokemon.weight} gram</div>
								<div>Moves 	: 	{detailPokemon.moves.slice(0,5).join(', ')}</div>
								{!completed.win && !completed.gameOver && !completed.lose ? 
									<Button title="Catch" onClick={catchPokemon}/> : null
								}
								{completed.win && !completed.gameOver && !saved ? (
									<Button title="cancel" onClick={cancel}/>): (null)
								}
							</DetailText>
					</ContainerInfoPokemon>
					</>
				)
			}
		</Container>
	)
}

export default DetailPage

const Container = styled.div`
		width:80%;
		padding:10px;
		justify-content:center;
		align-items:center;
		display:flex;
		border:5px solid #4774f5;
		flex-direction:column;
		margin-top:50px;
`
const ContainerInfoPokemon = styled.div`
	display:flex;
	flex-direction:row;
	align-items:center;
	@media(max-width:450px){
		flex-direction:column;		
	}
`
const DetailText =styled.div`
	padding:10px;

`