import React from 'react';
import './Event.css';
export default function Events(){
      return (
        <section id = "events">
          <div class="events-container">
            <h1> Events </h1>
            <iframe src="https://calendar.google.com/calendar/embed?height=500&amp;wkst=1&amp;bgcolor=%23F6BF26&amp;ctz=America%2FLos_Angeles&amp;src=a2ZpY3MyamxtcTNhczhla2w2ZmprYzBsZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000"
             width="800" height="600" frameborder="0" scrolling="no">
            </iframe>
          </div>
        </section>
      )
  }
