import React from "react";

import image from "../images/education.jpg";

const imageAltText = "University of Maryland";

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div style={{ paddingLeft: "3rem" }}>
          <h3>
            <b>University of Maryland, College Park</b>
          </h3>
          <p>2021-Present</p>
          <p>Major: Information Science</p>
          <p>Studying: Data Science and Machine Learning</p>
        </div>
      </div>
    </section>
  );
};

export default Education;