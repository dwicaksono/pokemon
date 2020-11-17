import styled from "styled-components"

export default function InputTextWithButton({placeholder,title, onChange,onClick}) {
    return (
        <ContainerSeacrh>
            <Input placeholder={placeholder} onChange={onChange}/>
            <Button onClick={onClick}>{title}</Button>
        </ContainerSeacrh>
    )
}


const ContainerSeacrh = styled.div`
    margin:20px 0 ;
    `
const Input = styled.input`
    padding:10px;
    width:300px;
    border:2px solid #4774f5;
    &:focus{
			outline:none
    }
    @media(max-width:480px){
			width:200px;
    }
`
const Button = styled.button`
    background-color:#f9ee0c;
    padding:10px;
    color:#4774f5;
    font-weight:400;
    border:2px solid #4774f5;
    &:hover{
        /* outline:none; */
        background-color:#4774f5;
        color:#f9ee0c;
    }
    &:focus{
        outline:none
    }
`