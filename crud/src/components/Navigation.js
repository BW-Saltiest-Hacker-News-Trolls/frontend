import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import styled from "styled-components";
import SaltFeed from './SaltFeed';
import Login from './Login';
import List from './List';
import UserSearch from './UserSearch.js';
import HamburgerMenu from './HamburgerMenu.js';
import SavedList from './SavedList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const WrapperDiv = styled.div `
display: flex;
justify-content: center;
justify-content: space-evenly;
align-items: center;
font-size: 2rem;
margin-top: 20px;
border-bottom: 2px solid black;
padding-bottom: 20px;

.hamburger {
      position: absolute;
      left: 45px;
}
`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

const Button = styled.button`
      outline: none;
      cursor: pointer;
      border: none;
      background-color: white;
      font-size: 2rem;
`;

const Navigation = () => {
      const [menu, setMenu] = useState(true);

  return (
    <>
    <WrapperDiv className = "NavWrap">    
          <Button className='hamburger' onClick={() => setMenu(!menu)}><FontAwesomeIcon icon={faBars}/></Button>
          <Link to ="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>Salt Feed</Link>
          <Link to ="/search" style={{ textDecoration: 'none' , color: 'black' }}>User Search </Link>
          <Link to ="/saved" style={{ textDecoration: 'none' , color: 'black' }}>Saved </Link>
    </WrapperDiv>
      <HamburgerMenu hidden={menu} />


      <Container>
            <Route path ='/characters' component = {List} />
            <Route exact path ='/'component = {SaltFeed} />
            <Route path="/login" exact component={Login} />
            <Route path="/search" exact component={UserSearch} />
            <Route path="/saved" exact component={SavedList} />
      </Container>
          </>
   
  )};


 export default Navigation;