import React from "react";
import image from './about.jpg'

function About() {
  return (
    <div>
    <div>
      <h2 className="abou"> About</h2>
      </div>
      <div className="aboutImage">
        <img src={image} alt='myimage'></img>
      </div>

      <div>
        <p className="paragraph">
          <p>`I am of the opinion that my life belongs to the whole community and as long as I live, it is my privilege to do for it whatever I can.` _George B.S_</p>
          <p>In Kenya the Public Service Commission (PSC) established by Article 233 of the constitution is mandated to establish and abolish public offices, appoint persons to hold offices,  ensure that the public service is efficient and effective and to promote the values and principles of governance under article 10 and 232 of the constitution. Article 232 establishes values and principles of public service entrenching high standards of professionalism in public service. This includes responsiveness, prompt, effective, impartial, and equitable provision of service; high standards of professional ethics; efficient, effective, and economic use of resources; and transparency and accountability. With the devolved system of government in place, the county governments are responsible for public service as spelt out in article 235 of the constitution. In this regard, they have established County Public Service Boards (CPSBs).</p>
          <p>Despite this, there are key important elements that providers of public services need to consider which are crucial to the development of any given society and which is not adequately utilized in the Kenyan public service. As the country celebrates the public service day the following key elements are important for consideration.
</p>
          <p>_Sustained momentum in public sector reforms_
Since 1980s, the government has seen a renewed momentum in improving service delivery. The civil service reform program was adopted in early 1990s aimed to build a public service workforce that was responsive to the needs of the citizens. Under the economic recovery strategy, the reform agenda includes efforts to nurture and instil attitudinal change in the public service. Further, the Kenya Vision 2030 identifies public sector reforms as key in the transformative agenda with expectation that public service is citizen-focused and results-oriented institutions in serving a rapidly growing economy and society.</p>
          <p>This app plays the digital role of further enabling improvement of public service delivery quality through data collection of citizen feedback.</p>

</p>

      </div>
      </div>
      
    
    
  );
}

export default About;