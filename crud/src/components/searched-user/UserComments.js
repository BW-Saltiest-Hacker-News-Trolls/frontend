import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext.js';

import Comment from './Comment.js';

import { Button, Card, Image, Grid } from 'semantic-ui-react';

const UserComments = () => {
    const { comments, author } = useContext(SearchContext);

    if(comments.length > 0) {
        return (
            <Grid relaxed columns='4'>
                { comments.map(comment => {
            return (
                <Grid.Column stretched>
                    <Comment author={author} comment={comment} />
                </Grid.Column>
            )
        })}
            </Grid>
        ) 
       
    } else {
        return (
            <div>No comments...</div>
        )
    }
}

export default UserComments;