import React, { useState, useEffect, useRef } from "react";
import "./Work.css";
import about_picc from "../../assets/about_picc.png";
import graded from '../../assets/Work/graded.mp4';
import cine from '../../assets/Work/cine.mp4';

const data = [
  {
    title: "Title 1",
    description: "Description 1",
    image: about_picc,
    video: graded,
  },
  {
    title: "Title 2",
    description: "Description 2",
    image: about_picc,
    video: cine,
  },
  {
    title: "Title 3",
    description: "Description 3",
    image: about_picc,
    video: graded,
  },
  {
    title: "Title 4",
    description: "Description 4",
    image: about_picc,
    video: cine,
  },
  {
    title: "Title 5",
    description: "Description 5",
    image: about_picc,
    video: graded,
  },
  {
    title: "Title 6",
    description: "Description 6",
    image: about_picc,
    video: cine,
  },
];

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="carousel-container">
      <h1 className="work-head1">Works</h1>
      <div className="carousel">
        {data.map((item, index) => {
          let className = "carousel-item";

          if (index === currentIndex) {
            className += " active";
          } else if (index === (currentIndex - 1 + data.length) % data.length) {
            className += " prev";
          } else if (index === (currentIndex + 1) % data.length) {
            className += " next";
          }

          return (
            <div key={index} className={className}>
              <div
                className="media-container"
                onMouseEnter={() => videoRefs.current[index]?.play()}
                onMouseLeave={() => videoRefs.current[index]?.pause()}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="carousel-image"
                />
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.video}
                  loop
                  muted
                  className="carousel-video"
                ></video>
              </div>
              <div className="carousel-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>
        &#8592;
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        &#8594;
      </button>
      <div className="carousel-indicators">
        {data.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Works;


