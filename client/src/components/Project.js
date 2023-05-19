import React from "react";
import projects from "../db/db";

export default function Project() {
  return projects.map((data, index) => (
    <div className="col-sm-6" key={index}>
      <div className="img-container">
        <img className="port-img" src={data.img} alt={data.alt}></img>
        <div className="middle">
          <p className="caption">{data.caption}</p>
          <a href={data.github} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <span></span>
          <a href={data.liveSite} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  ));
}
