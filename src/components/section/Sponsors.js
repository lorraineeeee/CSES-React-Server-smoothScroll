import React from 'react';
import './Sponsors.css';
export default function Sponsors(){
    return (
        <section id="sponsors">
            <div className="sponsor-container">
              <h1>Sponsors</h1>
              <h1><img name="cseslogo" src="/sponsors/yelp.png"
                       width = "280" height = "80" alt="logo"></img></h1>
              <h1><img name="cseslogo" src="/sponsors/cse-ucsd.png"
                       width = "280" height = "80" alt="logo"></img></h1>
              <h1><img name="cseslogo" src="/sponsors/viasat.png"
                       width = "280" height = "80" alt="logo"></img></h1>
              <h1><img name="cseslogo" src="/sponsors/riot-logo-black-text.png"
                       width = "300" height = "200" alt="logo"></img></h1>
              <h1><img name="cseslogo" src="/sponsors/lab_society.png"
                       width = "300" height = "200" alt="logo"></img></h1>
            </div>
        </section>
    );
}
