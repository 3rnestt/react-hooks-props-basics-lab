import React from "react";
import Links from "./Links";

function About(props) {
  const { bio } = props;
const isBio = bio && bio.trim() !== '';
  return (
    <div id="about">
      <h2>About Me</h2>
      {isBio && <p>{bio}</p>}
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {<Links
      github= "https://github.com/liza"
      linkedin="https://www.linkedin.com/in/liza/"
      />}
   </div>
  );
}

export default About;
