import { clonePrototype } from 'clone';
import React from 'react';
import dummyData from '../../dummy-data';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {
        comments.map(comment => {
          return < Comment comment={comment} key={dummyData.comment} />
        })
      }
    </div>
  );
};

export default Comments;
