function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#252529" : "#fdfdfa",
        color: props.mode === "dark" ? "#fdfdfa" : "#252529",
      }}
    >
      <h1 className="text-center m-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={{
                backgroundColor: props.mode === "dark" ? "#252529" : "#fdfdfa",
                color: props.mode === "dark" ? "#fdfdfa" : "#252529",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About TextUtil
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#252529" : "#fdfdfa",
                color: props.mode === "dark" ? "#fdfdfa" : "#252529",
              }}
            >
              <strong>
                TextUtil is an online text manipulation tool that helps you
                customize and optimize your written content.
              </strong>{" "}
              Whether you need to change the formatting, remove unwanted
              characters, or extract specific data, TextUtil makes it easy and
              quick to achieve your desired results.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "dark" ? "#252529" : "#fdfdfa",
                color: props.mode === "dark" ? "#fdfdfa" : "#252529",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Text Manipulation Made Easy
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#252529" : "#fdfdfa",
                color: props.mode === "dark" ? "#fdfdfa" : "#252529",
              }}
            >
              With TextUtil, you don't need to be a programmer or have any
              special skills to improve your text. The platform offers a
              user-friendly interface that lets you select from a wide range of
              features, such as sorting, filtering, and merging, and apply them
              to your text instantly. You can also save your favorite options
              for future use or share them with others.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "dark" ? "#252529" : "#fdfdfa",
                color: props.mode === "dark" ? "#fdfdfa" : "#252529",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Customized Text for Your Needs
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#252529" : "#fdfdfa",
                color: props.mode === "dark" ? "#fdfdfa" : "#252529",
              }}
            >
              Whether you're a student, a writer, or a business professional,
              TextUtil can help you streamline your work and save time. By
              automating repetitive tasks and enabling you to focus on the
              content, rather than the formatting, TextUtil empowers you to be
              more productive and efficient in your work.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
