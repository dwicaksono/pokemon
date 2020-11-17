import styled from "styled-components"
import {useDispatch,useSelector} from 'react-redux'
import CardMyList from "../../components/CardMylist"
import {deleteMylistPokemon} from '../../redux/actions/myListPokemonAction'
import Swal from 'sweetalert2'

const PokemonList = () => {
const dispatch = useDispatch()
  const {myListPokemon,owned} = useSelector(state => state.myPokemonList)
  
  const deleteHandler =(idx,name)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        let newList = myListPokemon.filter((_,id) => id !== idx)
        let newOwned = {...owned}
        if(newOwned[name] === 1){
          delete newOwned[name]
        }else{
          newOwned[name] -= 1
        }    
        dispatch(deleteMylistPokemon(newList,newOwned))
      }
    })
  }
    return (
      <Container>
        { myListPokemon && myListPokemon.length > 0 ?(
          myListPokemon.map((data,idx)=>(
            <CardMyList key={idx} image={data.image} name={data.name} type={data.type}
            weight={data.weight}
            nickname={data.nickName} moves={data.moves.slice(0,5).join(', ')} onClick={()=>deleteHandler(idx,data.name)}/>
          ))
          ):(
            <div>... no data ...</div>
          )
        }
      </Container>
    )
  }
  
export default PokemonList

const Container = styled.div`
  margin-top:25px;
`
