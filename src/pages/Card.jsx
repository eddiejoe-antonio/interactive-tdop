import React from 'react';

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default Card;
