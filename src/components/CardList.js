import React from "react";
import Card from "./Card";

function CardList({ tasks }) {
  return (
    <div className="cardlist">
      <ul>
        {tasks.map((task) => (
          <Card key={task.id} task={task}></Card>
        ))}
      </ul>
    </div>
  );
}

export default CardList;
