import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 30%;
  border: 1px solid black;
  padding:1%;
  border-radius:2%;
  margin-bottom:1%;
`;


function SavedList () {
  const [savedComments, setSavedComments]= useState ([])



    useEffect (() => {
      const getSavedComments = () => {
        axiosWithAuth()
        .get(`/comments`)
        .then (response => {
          setSavedComments(response.data);
        })
        .catch(error=> console.log(error))
      }
      getSavedComments();
    }, [])

    const deleteComment = commentId => {
      console.log(commentId)
      axiosWithAuth()
        .delete(`/comments`, {data:{id:commentId}})
        .then (response => {
          console.log(response)
          setSavedComments(response.data)
        })
        .catch(error=> console.log(error))
    };


  return (
    <>
    <div className="saved-list">
      <h3>Saved Comments:</h3>
      {savedComments.map(comment => {
        console.log("comments:", comment)

        return (
          <Wrapper className = "saved-comment-card">
    
              <div className = "troll-username">
                <h2>Username: {comment.troll_username}</h2>
              </div>
              <br />
              <div className = "toxicity">
                <h3>Toxicity Score: {comment.comment_toxicity}</h3>
              </div>    
              <br />
              <div className = "comment">
                <p>Comment: {comment.comment}</p>
              </div>
              <br />
              <button className = 'remove-comment-btn'
                        onClick = {() => deleteComment (comment.id)}
                        >Delete Comment
                </button>
          </Wrapper>
        )
      })}
    </div>
    </>
  );
}

export default SavedList;