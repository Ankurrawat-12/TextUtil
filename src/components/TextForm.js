import React, { useState } from "react";
import PropTypes from "prop-types";

function TextForm(props) {

  const handleUpClick = ()=>{
    setText("You Have Clicked on Uppercase Button");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  
  const [text, setText] = useState("Enter Text hear");
  return (
    <div>
      <h1 className="heading">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-outline-success" onClick={handleUpClick}>Uppercase</button>
    </div>
  );
}

TextForm.prototypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter Text Below",
};

export default TextForm;
