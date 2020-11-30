import React from "react";

function Card({ task }) {
  return (
    <div key={task.id} className="inline-block">
      <div className="card">
        <div className="id">ID:{task.id}</div>
        <div className="cardname">Name:{` ${task.name}`}</div>
        <div className="cardvalue">Value:{` ${task.value}`}</div>
      </div>
    </div>
  );
}

export default Card;
