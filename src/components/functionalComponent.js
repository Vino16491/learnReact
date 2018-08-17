import React from "react";

const FunctionalComponent = props => {
  return (
    <div>
      <h1>Good Morning {props.name}</h1>
      <input type="text" value={props.name} name="name" />
      <button onClick={props.butonPassToFunctional}>Change name</button>
    </div>
  );
};

export default FunctionalComponent;
