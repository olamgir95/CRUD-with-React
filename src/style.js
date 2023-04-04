import styled from "styled-components";


const Container = styled.div`
background-color: grey;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px 100px;
padding: 10px 50px;
font-size: 13px;


.inselect{
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    height: 30px;
}
input{
    display: block;
    width: 80%;
    border-radius: 10px;
    border: none;
    ::placeholder{
        padding-left: 5px;
    }
    :first-child{
        width: 100%;
        
    }
    :nth-child(2){
        width: 50%;
        margin-left: 10px;
    }
}

.inputs{
    width: 100%;
    display: flex;
    padding: 10px 20px;
    margin-left: 10px;
    input{
        width: 13%;
        height: 20px;
        margin: 5px;
        padding: 2px;
        color: gray;
    }
    button{
        width: 10%;
        height: 30px;
        margin: 5px;
        padding: 2px;
        background-color: coral;
        border: none;
        border-radius: 5px;
        color: white;
    }
}
`
const Table = styled.div`
background-color: white;
padding: 10px;
width: 100%;
overflow-y: scroll;
height: 250px;
position: relative;
padding-top: 50px;


 th{
    border: 5px solid white;
    
}
tr{
    border: 5px solid white;
    
}
thead{
    
    position: fixed;
    width: 75%;
    top: 144px;
    /* padding: 5px; */
    tr{
        color: black;
        font-size: 20px;
        background-color: lightgray;
        height: 40px;
        
        
       
        
    }
}


tr:nth-child(even){
    color: grey;
}
th:nth-child(2){
    padding-left: 1%;
    width: 21%;
    padding-right: 1%;
}
th:nth-child(3){
    width: 80px;
    padding-right: 1%;
}
th:nth-child(4){
    width: 12%;
    padding-right: 1%;
}
th:nth-child(5){
    width: 12%;
    padding-right: 1%;
}
th:nth-child(6){
    width: 12%;
    padding-right: 1%;
}
th:nth-child(7){
    width: 12%;
    padding-right: 1%;
}
th:nth-child(8){
    width: 14%;
    
    padding-right: 1%;
}
th:nth-child(9){
    width: 10%;
    padding-right: 1%;
}
`




const Select = styled.select`
width: 10%;
display: block;
margin-left: 20%;
`
export { Container, Table,  Select}
