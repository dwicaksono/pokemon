
import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import Button from '../../particel/Button'


export default function CardList({data,onClick}) {
	const {owned} = useSelector(state => state.myPokemonList)
    return (
			<Container>
				<div>
					<NamePokemon>
						{data.name}
					</NamePokemon>
					<NamePokemon>
						owned total : <span>{owned[data.name] ? owned[data.name] : 0 }</span>
					</NamePokemon>
				</div>
					<Button title="detail" onClick={onClick}/>					
			</Container>
    )
}

const Container = styled.div`
		background-color: #4774f5;
		padding:10px;
		margin:10px;
`
const NamePokemon = styled.div`
	/* color:#f9ee0c; */
	color: white;
	font-weight:500;
	letter-spacing:2px;
`
