import React from "react";
import TextArea from "../components/TextArea";
import InputCotact from "../components/inputCotact";

const Contact = () => {

  return (
    <div>
      <div id="Contact" name="contact" className="contactContainer">
        <div className="contactheading">
          <h1>Contacts</h1>
        </div>
        <div className="captption">
          <p>Let's contact by filling through input value</p>
        </div>
        <div className="contactcard">
          <form action="https://getform.io/f/4e614526-e143-4d2f-8c60-62be0a95e700" method="POST" className="formCard">
            <div>
            <InputCotact 
              placeholder="Fill your full name"
              name="name"
              contactForm={'contactForm'}

          />
            <InputCotact 
              placeholder="Fill your correct email"
              name="Email"
              contactForm={'contactForm'}
             />
            </div>
            <div className="textArea">
             <TextArea />
            </div>
            <div className="btnForm">
                <button type="submit" className="formbutton">Let's talk</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
