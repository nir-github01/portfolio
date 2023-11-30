import React from "react";
import Input from "../components/Input";
import { InputList } from "../components/InputList";
import TextArea from "../components/TextArea";

const Contact = () => {

  let inputFields = InputList.map((input)=>{
    return(
      <div key={input.id}>
      <Input 
      type={input.type}
       name={input.name}
       label={input.label}
       labelId={input.name + input.labelId}
       placeholder={input.placeholder}
       id={input.name + input.id}
       />
       </div>
    )
  })
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
            {inputFields}
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
