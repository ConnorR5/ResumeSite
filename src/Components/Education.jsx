import React from "react";

import image from "../images/Iribe.jpg";
import image2 from "../images/education.jpg";

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
          <img
            src={image2}
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
          <p>
            <b>Notable Classes:</b>
          </p>
          <p>CMSC 131: (Java) Object Oriented Programming I</p>
          <p>CMSC 132: (Java) Object Oriented Programming II</p>
          <p>INST 326: (Python) Object Oriented Programming I</p>
          <p>INST 327: (SQL) Database Design and Modelling</p>
          <p>INST 414: (Multiple) Advanced Datascience tequniques and Machine Learning</p>
          <p>PHIL 201: Einstein/Bell Quantum Physics</p>
          <p>BMGT 230: Business Statistics</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
