import React from "react";

export default function Home({ handlePageChange }) {
  return (
    <main id="main-container">
      <p>Welcome, my name is</p>
      <h1 className="animate__animated animate__fadeIn">
        Korey Collazo
      </h1>
      <h2 className="animate__animated animate__delay-1s animate__fadeIn">
        Full Stack Web Developer
      </h2>
      <p className="home-caption">
        Transforming your ideas into reality. Let's build something amazing
        together.
      </p>
      <div className="btn-wrapper">
        <button
          type="button"
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className="btn btn-view-work"
        >
          View Work &rarr;
        </button>
      </div>
    </main>
  );
}
