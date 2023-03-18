import React, { useState } from "react";
import PropTypes from "prop-types";

function TextForm(props) {
    document.title = "Home | TextUtils";

    const handleUppercaseClick = () => {
        let newText = text.toUpperCase();
        setConvertedText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowercaseClick = () => {
        let newText = text.toLowerCase();
        setConvertedText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleRemoveSpaceClick = () => {
        let newText = text.split(" ").join(" ");
        // let newText = text.split(/[ ]+/).join(" ");
        setConvertedText(newText);
        props.showAlert("Removed all Extra Spaces", "primary");
    }

    const handleRemoveComaClick = () => {
        let newText = text.split(",").join(" ");
        setConvertedText(newText);
        props.showAlert("Removed all Comma ", "primary");
    }

    const handleClearTextClick = () => {
        setConvertedText(text);
        setText("");
        props.showAlert("Cleared all Text ", "danger");
    }

    const handleCopyTextClick = () => {
        props.showAlert("Copied Converted Text ", "warning");
        navigator.clipboard.writeText(convertedText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    const [convertedText, setConvertedText] = useState("");


    const wordsArray = text.split(/\s+/).filter((str) => str !== '');
    const words = wordsArray.length;

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? '#fdfdfa' : '#252529' }}>
                <h1 className="text-center">{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#252529' : '#fdfdfa',
                        color: props.mode === 'dark' ? '#fdfdfa' : '#252529'
                    }}></textarea>
                </div>
                <div className="container text-center">
                    <button className={`btn btn${props.mode === 'light' ? '-outline-dark' : '-outline-light'} m-2`} onClick={handleUppercaseClick}>Uppercase</button>
                    <button className={`btn btn${props.mode === 'light' ? '-outline-dark' : '-outline-light'} m-2`} onClick={handleLowercaseClick}>Lowercase</button>
                    <button className={`btn btn${props.mode === 'light' ? '-outline-dark' : '-outline-light'} m-2`} onClick={handleRemoveSpaceClick}>Remove " "</button>
                    <button className={`btn btn${props.mode === 'light' ? '-outline-dark' : '-outline-light'} m-2`} onClick={handleRemoveComaClick}>Remove ' , '</button>
                    <button className={`btn btn${props.mode === 'light' ? '-outline-dark' : '-outline-light'} m-2`} onClick={handleClearTextClick}>Clear Text</button>
                    <button className={`btn btn${props.mode === 'light' ? '-outline-dark' : '-outline-light'} m-2`} onClick={handleCopyTextClick}>Copy 'Text'</button>
                </div>
                <div className="my-3">
                    <textarea className="form-control" id="myBox" rows="8" value={convertedText} style={{
                        backgroundColor: props.mode === 'dark' ? '#252529' : '#fdfdfa',
                        color: props.mode === 'dark' ? '#fdfdfa' : '#252529'
                    }}></textarea>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? '#fdfdfa' : '#252529' }}>
                <h1 className="text-center">Your Text Summary</h1>
                <p className="my-3 text-center"> {words} words {text.length} characters</p>
                <p className="my-3 text-center"> {0.008 * words} Minutes</p>
                <h2 className="text-center">Preview</h2>
                <p className="text-center">{text.length>0?text:"Enter  Something to preview"}</p>

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
