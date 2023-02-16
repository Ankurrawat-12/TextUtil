import React, { useState } from "react";
import PropTypes from "prop-types";

function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setConvertedText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setConvertedText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    const [convertedText, setConvertedText] = useState("");
    return (
        <>
            <div className="container">
                <h1 className="text-center">{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-outline-success mx-1" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-outline-success mx-1" onClick={handleLowClick}>Lowercase</button>
                <div className="my-3">
                    <textarea className="form-control" id="myBox" rows="8" value={convertedText}></textarea>
                </div>
            </div>
            <div className="container">
                <h1 className="text-center">Your Text Summary</h1>
                <p className="my-3 text-center"> {text.split(" ").length} words {text.length} characters</p>
                <p className="my-3 text-center"> {0.008 * text.split(" ").length} Minutes</p>
                <h2 className="text-center">Preview</h2>
                <p className="text-center">{text}</p>

            </div>
        </>
    );
}

TextForm.prototypes = {
    heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
    heading: "Enter Text Below",
};

export default TextForm;
