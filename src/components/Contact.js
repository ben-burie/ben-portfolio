import React from 'react';

const Contact = () => (
  <section id="contact" className="section contact">
    <h2>Contact Me</h2>
    <div className="contact-form">
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;
