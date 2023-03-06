import React from "react";

export default function About() {
  return (
    <div className="about" id="main-container">
      <div className="container animate__animated animate__fadeInUp animate__slower">
        <div className="row">
          <div className="col-sm-6">
            <h1>About Me</h1>
            <p>
              As a full stack developer, I have a diverse skill set and
              expertise in developing both the frontend and backend components
              of web applications. I am proficient in various technologies and
              programming languages used for building dynamic web applications.
            </p>
            <br></br>
            <p>
              I am passionate about creating efficient and scalable web
              applications, and I am constantly exploring new technologies and
              tools to improve my skills and stay up-to-date with the latest
              trends in web development.
            </p>
          </div>
          <div className="col-sm-6">
            <img className="about-img" src="%PUBLIC_URL%/assets/images/about.jpg" alt="KC logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
