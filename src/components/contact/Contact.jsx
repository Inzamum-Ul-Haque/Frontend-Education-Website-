import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.578237069936!2d90.3654215!3d23.8223482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1655793907558!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  return (
    <>
      <Back title="Contact Us" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              iste?
            </p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS</h4>
                <p>
                  Road-03(BCCP Road), House-10, Block-A, Section-11, Mirpur-1216
                </p>
              </div>
              <div className="box">
                <h4>EMAIL: </h4>
                <p>inzamum.inu@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE: </h4>
                <p>+8801750414709</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="email" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow Us Here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
