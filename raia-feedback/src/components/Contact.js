import React from "react";

function Contact() {
  return (
      <div>
          <h3 className="cont" >Contact</h3>
          <div className="conTact">
          <p className="links">
              <div>
                  <p className="contactInfo">Phone number:</p>
                  <a href="+254710112271" >+254710112271</a>
              </div>
              <hr></hr>
                  <div>
                      <p className="contactInfo">Linkedin:</p>
                      <a href="https://www.linkedin.com/in/mariam-ali-71246a179">https://www.linkedin.com/in/mariam-ali-71246a179</a>
                    </div>
                  <hr></hr>
              <div>
                  <p className="contactInfo">Email:</p>
                  <a href="ali.mariam.mwanasiti@gmail.com">ali.mariam.mwanasiti@gmail.com</a>
                  </div>
 
          </p>
          </div>
      </div>
    
    
  );
}

export default Contact;