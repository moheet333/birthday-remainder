import React, { useState } from "react";
import Container from "./Container";
import Heading from "./Heading";
import InputForm from "./InputForm";
import Footer from "./Footer";
import ReadList from "./ReadList";
import List from "./List";
import ListItem from "./ListItem";
import InnerContainer from "./InnerContainer";
import NoBirthday from "./NoBirthday";

function App() {
  const [dates, setDates] = useState([]);
  const [flag, setFlag] = useState([]);
  var day = new Date();
  var dd = String(day.getDate()).padStart(2, "0");
  var mm = String(day.getMonth() + 1).padStart(2, "0");
  var yy = String(day.getFullYear());

  day = yy + "-" + mm + "-" + dd;
  console.log(day);

  function onSubmit(date) {
    setDates((prevValue) => {
      return [...prevValue, date];
    });
  }

  function clicked(show) {
    setFlag(show);
  }

  function deleteDate(id) {
    setDates((prevValue) => {
      return prevValue.filter((date, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <InputForm addDate={onSubmit} />
      <InnerContainer />
      {dates.map((date, index) => {
        return day === date.dob ? (
          <ListItem
            key={index}
            id={index}
            dateName={date.name}
            dateAge={date.age}
            onDelete={deleteDate}
          />
        ) : null;
      })}
      <ReadList checkList={clicked} />
      {flag === "Read List"
        ? dates.map((date, index) => {
            return (
              <List
                key={index}
                id={index}
                name={date.name}
                age={date.age}
                dob={date.dob}
                onDelete={deleteDate}
              />
            );
          })
        : null}
      <Footer />
    </div>
  );
}

export default App;
