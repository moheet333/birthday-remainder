import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function InputForm(props) {
  const history = useHistory();
  const [inputData, setInputData] = useState({
    name: "",
    age: "",
    dob: "",
  });

  function handleChange(Event) {
    const { name, value } = Event.target;

    setInputData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleSubmit(Event) {
    props.addDate(inputData);
    setInputData({
      name: "",
      age: "",
      dob: "",
    });
    Event.preventDefault();
  }

  const postData = async (e) => {
    e.preventDefault();

    const { name, age, dob } = inputData;

    const res = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        dob,
      }),
    });

    const data = await res.json();

    if(data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid");
    } else {
      window.alert("Successfull registration");
      console.log("Success");

      history.push("/");
    }


  };

  return (
    <div className="inputForm">
      <p>Enter new birthday</p>
      <div className="innerForm">
        <form method="POST">
          <label htmlFor="name">Enter Name: </label>
          <input
            type="text"
            className="name"
            name="name"
            placeholder="Moheet"
            value={inputData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="age">Enter Age: </label>
          <input
            type="number"
            className="age"
            name="age"
            placeholder="18"
            value={inputData.age}
            onChange={handleChange}
            required
          />
          <label htmlFor="dob">Enter DOB: </label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={inputData.dob}
            onChange={handleChange}
            required
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
