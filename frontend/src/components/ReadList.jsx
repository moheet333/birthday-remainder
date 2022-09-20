import React, { useState } from "react";

function ReadList(props) {
  const [ showButton, setButtonList ] = useState("Read List");

  function handleClick() {
    if(showButton === "Read List"){
        setButtonList("Hide");
    } else if (showButton === "Hide"){
        setButtonList("Read List");
    }
    props.checkList(showButton);
  }

  return (
    <div className="readList">
      <button className="listButton" onClick={handleClick}>
        {showButton}
      </button>
    </div>
  );
}
export default ReadList;