import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email regex pattern
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!email || !name || !message) {
      setError("Please enter fill all fields.");
      return;
    }

    if (name.length < 1) {
      setError("Please enter a name.");
      return;
    } else {
      setError("");
      
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: { 'Content-Type': 'application/json' },
      });
      alert("Thanks for reaching out, speak to you soon!");
      if (response.ok) {
        setEmail("");
        setName("");
        setMessage("");
      } else {
        alert(response.statusText);
      }
    }
  };

  return (
    <main
      id="contact-me"
      className="animate__animated animate__fadeInUp"
    >
      <h1>Contact Me</h1>
      <div className="contact-links">
          <a href="mailto:koreycollazo@gmail.com">Koreycollazo@gmail.com</a>
          <br/>
          <a href="tel:1-413-314-9236">1(413)314-9236</a>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email address</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit" className="btn btn-light">
          Submit
        </button>
      </form>
    </main>
  );
}
