import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';
import { Link } from 'react-router-dom';
import DeleteComment from './DeleteComment.js';


function SavedList () {
  const [savedComments, setSavedComments]= useState ([])
  // const {troll_username, comment_toxicity, comment} = savedComment; 


    useEffect (() => {
      const getSavedComments = () => {
        axiosWithAuth()
        .get(`/comments`)
        .then (response => {
          // console.log("comments:", response)
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
          <div className = "saved-comment-card">
    
          <div className = "troll-username">
            <h2>Username: {comment.troll_username}</h2>
          </div>
          <div className = "toxicity">
            <h3>Toxicity Score: {comment.comment_toxicity}</h3>
          </div>    
          <div className = "comment">
            <p>Comment: {comment.comment}</p>
          </div>
          {/* <center><DeleteComment comment = {comment}/></center> */}
          <button className = 'remove-comment-btn'
                    onClick = {() => deleteComment (comment.id)}
                    >Delete Comment
            </button>
      </div>
        )
      })}
  
  
    </div>


   
  
    
    <div className="dash-button">
      <Link to="/dashboard">Dashboard</Link>
    </div>
    </>
  );
}

export default SavedList;