import React, {useState} from 'react';
import styled from 'styled-components';
import SaltFeed from './SaltFeed.js';
import UpdateUsername from './UpdateUsername.js';

const Wrapper = styled.div`
margin-top:3%;
width:30%;
border:1px solid grey;
box-shadow: 5px 5px 5px black;
margin-left:35%;
`

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('username'));

    return (
        <>
        <Wrapper>
                <UpdateUsername setCurrentUser={setCurrentUser} /> 
                <h4>Welcome to your Salty Comment Dashboard, {currentUser}.</h4>
        </Wrapper>   
        <SaltFeed />
        </>
    )
}


export default Dashboard;
