import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; 
import CommentDetail from './CommentDetail'; 

const App = () => {
    return (
      <div className="ui container comments">
          <CommentDetail 
            author="Sam"
            timeAgo="Today at 4:45"
            body="Ignorant rant"
            avatar={faker.image.image()}/>
          
          <CommentDetail
            author="Alex"
            timeAgo="Today at 2:00"
            body="snarky comment"
            avatar={faker.image.image()}/>
          
          <CommentDetail
            author="Jane"
            timeAgo="Today at 5:00"
            body="props aint nothin but a thing"
            avatar={faker.image.image()}/>
      </div>  
    );
};


ReactDOM.render(<App />, document.querySelector('#root')); 