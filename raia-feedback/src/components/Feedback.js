import React from "react";

function Feedback({name, identification, office, department, rating, reason }) {
  return (
    <div className="card feedback-card">
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p className='reason'>{reason}</p>
      <p>Instituition: <small><b>{office}</b></small>
      <br/>Department: <small><b>{department}</b></small>
      <br/>Rating: <small><b>{rating}</b></small>
      </p>
      <span></span>
      <footer class="blockquote-footer"><cite title="Source Title">{name}</cite></footer>
    </blockquote>
  </div>
</div>
  );
}

export default Feedback;