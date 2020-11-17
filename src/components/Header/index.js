
import {
	Link
} from "react-router-dom";
import styled from 'styled-components';
import logo from "../../assets/images/logo.png";

	

export default function Header() {
    return (
			<ContainerNav>
				<div>
					<img src={logo} width={500} alt='logo pokemon'/>
				</div>
				<UnderList>
					<List>
						<Link to="/">Hunting</Link>
					</List>
					
					<List>
						<Link to="/pokemon-list">Pokemon List</Link>
					</List>
				</UnderList>
			</ContainerNav>
    )
}


const ContainerNav = styled.div`
	width:100%;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
`
const UnderList =styled.ul`
	display:flex;
`
const List =styled.li`
	font-size:24;
	font-weight:700;
	margin :  0 20px;
	color:#4774F5;
	&:hover{
		color:#f9ee0c;
	}
`