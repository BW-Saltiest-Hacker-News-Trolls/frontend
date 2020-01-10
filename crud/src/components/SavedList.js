import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { 
  Button,  
  Section,
  TrollWrap,
  Div
} from '../styles/RegistrationStyles'; 



function SavedList () {
  const [savedComments, setSavedComments]= useState ([])

  const styleObj ={
    fontSize: 20,
    fontFamily: "The Wild Hammers",
    color: "white"
  }

  const styleText ={
    fontSize:16
  }

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
   
    <Div className="saved-list">
      {savedComments.map(comment => {
        console.log("comments:", comment)
        
        return (
         
          <Section className = "saved-comment-card">
            
              <TrollWrap>
                  <div className = "troll-username">
                    <h2 style ={styleObj}>Username:
                    <br />
                    {comment.troll_username}</h2>
                  </div>

                  <br />

                  <div className = "toxicity">
                    <h3 style = {styleObj}>Toxicity Score: {comment.comment_toxicity}</h3>
                  </div>    
              </TrollWrap>

                  <br />

                  <div className = "comment">
                    <p style={styleText}>COMMENT:
                    <br /> {comment.comment}</p>
                  </div>

                  <br />

                  <center><Button className = 'remove-comment-btn'
                            onClick = {() => deleteComment (comment.id)}
                            >Delete Comment
                    </Button></center>
             
          </Section>
          
        )
      })}
    </Div>
    </>
  );
}

export default SavedList;