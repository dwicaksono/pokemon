import styled from 'styled-components'

export default function index({title,onClick}) {
    return (
    <Button onClick={onClick}>{title}</Button>
    )
}

const Button = styled.button`
	background-color:#f9ee0c;
	color:#4774f5;
	font-size:12px;
	font-weight:400;
	letter-spacing:2px;
	padding:5px 15px;
	margin: 5px 0;
	&:hover{
		background-color: #4774f5;
		color:#f9ee0c;
		}
		&:focus{
			outline:none
		}
`