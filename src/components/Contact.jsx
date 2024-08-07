import React from "react";
import UnisversalPtop from "./UnisversalPtop";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section id="contact">
      <UnisversalPtop pageName="Contact Us" />
      <div className="contact-sec">
        <div className="cd-left">
          <h1>Drop Us A Line</h1>
          <span className="cdl-text">
            Use the form below to get in touch with the sales team
          </span>
          <form>
            <div className="name-email">
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message *"
              required
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
        <div className="cd-right">
          <div className="cdr-top">
            <h2>Our Store</h2>
            <div className="cdr-details">
              <ul>
                <li>
                  2163 Phillips Gap Rd, West Jefferson, <br />
                  North Carolina, United States
                </li>
                <li>Phone: +1 666 88888</li>
                <li>Email: hi.avitex.gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="cdr-top">
            <h2>Open Hours</h2>
            <div className="cdr-details">
              <ul>
                <li>Mon - Fri: 7:30an=m - 8:00pm PST</li>
                <li>Saturday: 7:30an=m - 8:00pm PST</li>
                <li>Sunday: 7:30an=m - 8:00pm PST</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
