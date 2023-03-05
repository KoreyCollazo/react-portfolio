import React from "react";

export default function Resume() {
  return (
    <div
      id="main-container"
      className="animate__animated animate__fadeInUp animate__slower text-center"
    >
      <h1>Resume</h1>
      <h2>Download Here</h2>
      <a href="./assets/resumePlaceholder.pdf" download>
        <i className="bi bi-download "></i>
      </a>
      <h2>Proficiencies</h2>
      <div className="row pro-lists">
        <div className="col-sm-6">
          <p className="pro-li-title">Front-end</p>
          <ul>
            <li>Html</li>
            <li>CSS</li>
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
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
