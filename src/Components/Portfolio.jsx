import React from "react";
import image from "../images/Hornbake.jpg";
import hoverImage1 from "../images/hoverImage1.png";
import hoverImage2 from "../images/hoverImage2.webp";
import hoverImage3 from "../images/hoverImage3.webp";

const imageAltText = "Hornbake Library";

const projectList = [
  {
    title: "Journey of Starting My First Rental Property - Old Man and the Sea",
    description:
      "Gathering Data on the Housing Market, Investors, and Designing a Custom Website in my First Attempt at Property Management.",
    url: "https://medium.com/@crydel2/the-old-man-in-the-sea-5dfe50db0f4d",
    hoverImage: hoverImage1,
  },
  {
    title: "Analyzing Wikipedia’s Articles for Readability, Difficulty Level, and Topic",
    description:
      "My medium article on how I was able to gather, analyze, calculate, and display various reading level data from Wikipedia.",
    url: "https://medium.com/inst414-data-science-tech/analyzing-wikipedias-articles-for-readability-difficulty-level-and-topic-ff59168d402a",
    hoverImage: hoverImage2,
  },
  {
    title:
      "Tracking Location, Time Zone, and Day and Night Cycles of the International Space Station",
    description:
      "My medium article on how I tracked the International Space Station using Python, but more importantly demonstrates my proficiancy using APIs like the ISS and Google Maps.",
    url: "https://medium.com/inst414-data-science-tech/tracking-location-time-zone-and-day-and-night-cycles-of-the-international-space-station-6ffa19d2da1a",
    hoverImage: hoverImage3,
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
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
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="content">
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                  <p className="small">{project.description}</p>
                </div>
                <img
                  src={project.hoverImage}
                  alt=""
                  className="hover-image"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;