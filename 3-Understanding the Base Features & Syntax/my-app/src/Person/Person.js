import React from "react";

const Person = (props) => {
  return (
    <h3>
      I'm {props.name} and I am {props.age} years old. {props.children}
    </h3>
  );
};

export default Person;
