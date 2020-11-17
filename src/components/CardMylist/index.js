import styled from "styled-components"

const CardMyList = ({image,name,type,nickname,moves,weight,onClick}) => {

    return (
      <Container>
        <BoxInner>
          <img src={image} width={100} height={100} alt="pokemon"/>
          <Info>
            <div>Name     : {name}</div>
            <div>Nickname : {nickname}</div>
            <div>Type : {type}</div>
            <div>Weight : {weight} gram</div>
            <div>Moves : {moves}</div>
          </Info>
        </BoxInner>
        <BoxDelete onClick={onClick}>
          <DeleteText>
            RELEASE
          </DeleteText>
        </BoxDelete>
      </Container>
    )
  }
  
export default CardMyList

const Container = styled.div`
  margin:25px 0;
  /* padding:20px; */
  display:flex;
  flex-direction:row;
  justify-content:center;
  
`
const BoxInner = styled.div`
  padding:10px 0px;
  border:3px solid #4774f5;
  flex-direction:row;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Info = styled.div`
  margin-left:10px;
  width:400px;
  @media(max-width:450px){
    width:200px;
  }
`
const BoxDelete = styled.div`
  background-color:red;
  cursor: pointer;
  width:50px;  
  flex-direction:row;
  display:flex;
  justify-content:center;
  align-items:center;
  &:hover{
    background-color:#bf0303;
  }
`
const DeleteText = styled.div`
  color:white;
  font-size:16px;
  font-weight:700;
  letter-spacing:2px;
  display: inline-block;
  transform: rotate(-90deg);  
`