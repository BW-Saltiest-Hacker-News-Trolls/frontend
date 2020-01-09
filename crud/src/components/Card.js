import React, { useState } from "react";
import styled from "styled-components";

import { Card as UiCard, Icon, Image, Button, Label } from 'semantic-ui-react';
import axiosWithAuth from '../utils/axiosWithAuth';
// import SearchForm from './SearchForm';

/*
const WrapperDiv= styled.div`
padding: 20px;
border-radius: 20px;
width: 500px;
height: 50%;
border: 2px solid black;
margin: 20px 0 20px 0;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

*/
// const ButtonBox = styled.div`
// display: flex;
// justify-content: space-evenly;
// `;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-container {
    border-radius: 50%;
    padding: 10px;
    background-color: #FF6600;
  }

  .ui.card .toxicity-score {
    color: #FF4136;
  }

  .ui.buttons {
    align-items: center;
  }

  .ui.buttons .button {
    align-items: center;
  }
`;

const Card = (props) => {
  const [likes, setLikes] = useState(0);
  // some comments are too big for the card, they need to be sliced so that 
  // the card doesnt look weird, ideally there would then be some way to 'view more'
  // for the comment on the card
  let comment;
  if(props.comment.length > 150) {
    comment = `${props.comment.slice(0, 151)}...`
  } else {
    comment = props.comment;
  }

  const handleLikeButton = () => {
    setLikes(likes + 1);
  }

  const handleSave = () => {
    let commentInfo = {
      troll_username: props.name,
      comment_toxicity: props.toxicity,
      comment: comment
    }

    axiosWithAuth()
    .post(`/comments`, commentInfo)
    .then(response => {
        console.log("comment saved", response)
    })
    .catch(error => {
        console.log("did not save comment",error)
    })
  }

  // TODO: Save button should save the comment to the backend api (look at backend README for endpoint routes)
  return (
    <Main>
      <div className='img-container'>
        <Image src='https://www.freeiconspng.com/uploads/troll-face-png-4.png' size='tiny' wrapped/>
      </div>
      <UiCard>
          <UiCard.Content>
            <UiCard.Header>{props.name}</UiCard.Header>
              <UiCard.Meta className='toxicity-score'>Toxicity Score: {props.toxicity}</UiCard.Meta>
              <UiCard.Description>{comment}</UiCard.Description>
          </UiCard.Content>
              <Button.Group>
              <Button onClick={() => handleSave()} positive>Save</Button>
              <Button color='twitter'><Icon name='twitter' /></Button>
              <Button as='div' labelPosition='right'>
                <Button onClick={handleLikeButton} color='red'>
                  <Icon name='heart' />
                </Button>
  <Label as='a' basic color='red' pointing='left'>{likes}</Label>
              </Button>
              </Button.Group>        
      </UiCard>
    </Main>
        );
       }

export default Card;
