import React from "react";
import Project from "../Project";

export default function Portfolio() {
  return (
    <main
      id="portfolio"
      className="animate__animated animate__fadeInUp"
    >
      <div className="container animate__animated animate__fadeInUp">
        <h1>Projects</h1>
        <div className="row">
          <Project />
        </div>
      </div>
    </main>
  );
}
