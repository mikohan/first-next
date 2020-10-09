import React from 'react';

function Comment(props) {
  return (
    <div>
      <li>
        <h4>{props.email}</h4>
        <h5>{props.title}</h5>
        <p>{props.body}</p>
      </li>
    </div>
  );
}

export default Comment;
