import React, { useState } from "react";

function ListItem(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="listItem" onClick={handleClick}>
      <img src="https://picsum.photos/200" />
      <p className="itemName">{props.dateName}</p>
      <p className="itemAge">{props.dateAge} years</p>
    </div>
  );
}

export default ListItem;
