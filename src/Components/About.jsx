import React, { useState } from "react";
import image from "../images/theM.jpg";

const imageAltText = "Maryland Flower letter M";

const descriptionInterest =
  "I'm a Information and Data Science student studying at The University of Maryland. I enjoy experimenting with Machine Learning and UI/UX.";

const descriptionAbout = "Your About Me description goes here.";

const skillsList = [
  "Web design",
  "User experience",
  "Machine Learning",
  "Data Base Management",
  "Large Scale Data Processing",
  "Data Visualization",
  "Graphic design",
];

const aboutList = [
  "I've spent my last two summers Lifeguarding as a full time job working 6 days per week, But I'm ready to move on and start exploring where my career can take me.",
  "Adventuring to new locations and Exploring are two of my favorite things to do, I've been all around the country and I'm always looking for new places to go.",
  "I wanted to stretch my wings early and expirament with Entrepreneurealism. When I was young and naive, I tried my hand at dropshipping. I saw profit, but not what I thought I could achieve.",
];

const About = () => {
  const [activeTab, setActiveTab] = useState("interests");

  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          color: "black",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>{activeTab === "interests" ? "Fields of Interest" : "About Me"}</h2>
        <p className="large">
          {activeTab === "interests" ? descriptionInterest : descriptionAbout}
        </p>
        <hr />
        {activeTab === "interests" ? (
          <div>
            <ul
              style={{
                textAlign: "left",
                columns: 2,
                fontSize: "1.25rem",
                margin: "2rem 3rem",
                gap: "3rem",
              }}
            >
              {skillsList.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <hr />
          </div>
        ) : (
          <div style={{ width: "66%", margin: "0 auto" }}>
            <ul
              style={{
                listStyleType: "none",
                fontSize: "1.25rem",
                lineHeight: "8rem",
                margin: "2rem 0",
                gap: "4rem",
              }}
            >
              {aboutList.map((item, index) => (
                <li
                  key={item}
                  style={{
                    marginBottom: "3rem",
                    textAlign: index % 2 === 0 ? "left" : "right",
                    fontFamily: "'Edu TAS Beginner', cursive",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <button onClick={() => setActiveTab("interests")}>Fields of Interest</button>
          <button onClick={() => setActiveTab("about")}>About Me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
