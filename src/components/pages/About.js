import React from "react";

export default function About() {
  return (
    <main id="about">
      <div className="container animate__animated animate__fadeInUp animate__slower">
        <div className="row">
          <div className="col-sm-6">
            <h1>About Me</h1>
            <p>
              I am passionate about creating efficient and scalable web
              applications, and I am constantly exploring new technologies and
              tools to improve my skills and stay up-to-date with the latest
              trends in web development.
            </p>
          </div>
          <div className="col-sm-6">
            <img className="about-img" src="./assets/images/about.jpg" alt="KC logo"></img>
          </div>
        </div>
      </div>
    </main>
  );
}
