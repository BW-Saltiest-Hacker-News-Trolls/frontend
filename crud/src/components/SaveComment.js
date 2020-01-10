import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Button = styled.button`
    background-color:white;
    border:.5px solid black;
    font-color:black;
`

function SaveComment () {

    let state = {
        troll_username: '',
        comment_toxity: '',
        comment: ''
    }

  
    function onSubmit () {
        console.log(state)

        axiosWithAuth()
            .post(`https://hacker-news-troll.herokuapp.com/api/comments`, state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

            return (
                <Button className = "save-comments-btn"
                    onClick={() => onSubmit()}>Add To Saved List</Button>
                )
        }
  
export default SaveComment; 


