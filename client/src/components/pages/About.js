import React from "react";

export default function About() {
  return (
    <main id="about">
      <div className="container animate__animated animate__fadeInUp">
        <div className="row">
          <div className="col-sm-6">
            <h1>About Me</h1>
            <p>
              I am passionate about creating efficient and scalable web
              applications, and I am constantly exploring new technologies and
              tools to improve my skills and stay up-to-date with the latest
              trends in web development.
            </p>
            <h2 className="pro-title">Proficiencies</h2>
            <div className="row pro-lists">
          <div className="col-sm-6">
            <p className="pro-li-title">Front-end</p>
            <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
              <li>HandleBars</li>
              <li>React</li>
            </ul>
          </div>
          <div className="col-sm-6">
            <p className="pro-li-title">Back-end</p>
            <ul>
              <li>APIs</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
          </div>
          <div className="col-sm-6">
            <img
              className="about-img"
              src="./react-portfolio/assets/images/about.jpg"
              alt="KC logo"
            ></img>
          </div>
        </div>
        
        
      </div>
    </main>
  );
}
