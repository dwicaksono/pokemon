import React from 'react'
import styled from 'styled-components'

export default function index() {
    return (
        <Container>
					<label>Nickname :</label>
          <input placeholder="Nickname"/>
        </Container>
    )
}

const Container = styled.div`
	background-color:red;
	display:flex;
	justify-content:center;
	width:50%;
`
