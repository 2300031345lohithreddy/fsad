import { useState } from "react";

function Submission() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !abstract || !file) {
      setErrorMessage("Please fill out all fields and upload a file.");
      setSuccessMessage("");
      return;
    }

    console.log("Form Submitted", { title, abstract, file });
    setTitle("");
    setAbstract("");
    setFile(null);
    setErrorMessage("");
    setSuccessMessage("Your submission has been received!");
  };
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div className="submission-page">
      <h2>Submit Your Research Paper</h2>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit} className="submission-form">
        <div className="title">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="abstract">
          <label className="form-label">Abstract</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter abstract"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
          ></textarea>
        </div>

        <div className="upload-paper">
          <label className="form-label">Upload Paper</label>
          <input
            type="file"
            className="form-control custom-file-input"
            id="file-input"
            onChange={handleFileChange}
            style={{ display: "none" }} 
          />
          <button
            type="button"
            className="choose-file-btn"
            onClick={() => document.getElementById("file-input").click()}
          >
            Choose File
          </button>

          {file && <span className="file-name">{file.name}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Submission;
