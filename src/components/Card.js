import React from 'react';

function Card({ title, description, link }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">Visit</a>
        </div>
      </div>
    </div>
  );
}


export default Card;
