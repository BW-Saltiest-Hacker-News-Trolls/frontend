import styled from 'styled-components';


const Header = styled.div`
    margin-top:3%;
    padding: 1%;
    background-color: #ff6600;
    border-bottom: 2px solid #454245;
    box-shadow: 5px 5px 5px black;
`

const Wrapper = styled.div`
    background: white;
    display: flex;
    width: 30%;
    align-contents: center;
    margin: 0 auto;
    margin-top:3%;
    border:1px solid black;
    border-bottom: 2px solid #454245;
    box-shadow: 5px 5px 5px black;
    

    @media only screen and (max-width: 1024px) {
        width: 95%;
      }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 10px 0;
    align-items: center;
    margin-left:20%;
`;

const Input = styled.input`
    width: 100%;
    padding: 1px;
    margin: 10px;
    border: .5px solid black;
    border-bottom: 3px solid #a5c3c6;
    color: #454245;
    font-size: 1rem;
    text-align: center;
`;

const Button = styled.button`
    padding: 1px;
    padding-left:4%;
    color: #e3e2e0;
    border-radius:4px;
    border: .5px solid black;
    font-family:The Wild Hammers;
    font-size:16px;

    width: 70%;
    margin: 10px;
    height: 35px;
    display: flex;
    align-content: center;
    background-color:#ff6600;
    
    &:hover{
        background: #a5c3c6;
    }
`;

const Button2 = styled.button`
    padding: 1px;
    padding-left:5%;
    color: #e3e2e0;
    border-radius:4px;
    border: .5px solid black;
    font-family:The Wild Hammers;
    font-size:20px;

    width: 48%;
    margin: 10px;
    height: 35px;
    display: flex;
    align-content: center;
    background-color:#ff6600;
    
    &:hover{
        background: #a5c3c6;
    }
`;

const Container = styled.div`
    background-color: white;
    width:80%;
    border:.5px solid black;
    align-items:center;
    border-radius: 5px;
    padding:1%;
`

const SubTitle = styled.p`
    color:black;
    font-size: 1rem;
    width: 100%;

`;
 const NavLink = styled.span`
    color: darkblue;
    `;

 const Section = styled.section`
 max-width: 25%;
 border: .4px solid grey;
 box-shadow: 5px 5px 5px slategrey;
 padding:1%;
 border-radius:2%;
 margin-bottom:1%;
 margin-left:5%;
 background-color:white;

 `;

 const TrollWrap = styled.div`
    background-color:black;
    border: 1px solid grey;
    box-shadow: 2px 2px 2px teal;
    
 `;

 const Div = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin-top:3%;
    max-width:90%;
 `




export {

    Header,
    Wrapper,
    Form,
    Input,
    Button,
    Button2,
    Container,
    SubTitle,
    NavLink, 
    Section,
    TrollWrap, 
    Div
   

}