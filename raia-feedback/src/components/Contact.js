import React from "react";
import {Link} from "react-router-dom";

function Contact() {
  return (
      <div>
          <h3 className="cont" >Contact</h3>
          <div className="conTact">
          <p className="links">
              <div>
                  <p className="contactInfo">Phone number:</p>
                  <Link to="+254710112271" >+254710112271</Link>
              </div>
              <hr></hr>
                  <div>
                      <p className="contactInfo">Linkedin:</p>
                      <Link to="https://www.linkedin.com/in/mariam-ali-71246a179">https://www.linkedin.com/in/mariam-ali-71246a179</Link>
                    </div>
                  <hr></hr>
              <div>
                  <p className="contactInfo">Email:</p>
                  <Link to="ali.mariam.mwanasiti@gmail.com">ali.mariam.mwanasiti@gmail.com</Link>
                  </div>
 
          </p>
          </div>
      </div>
    
    
  );
}

export default Contact;