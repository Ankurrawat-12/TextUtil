import React from "react";

function Alert(props) {
  const Capatalize = (message) => {
    const lower = message.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{Capatalize(props.alert.type)}: </strong>
        {props.alert.message}
      </div>
    )
  );
}

export default Alert;
