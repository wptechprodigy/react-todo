import React from 'react';

function About() {
  return (
    <React.Fragment>
      <h2>About React Todo App</h2>
      <p style={paraStyle}>
        This is React Todo App Version 1.0.0 built with ReactJS
        <br />
        Inspired by a crash course done by Brad Traversy.
      </p>
      <p style={paraStyle}>
        I tweaked it with some of my own preferences and as a way to make it
        unique.
      </p>
    </React.Fragment>
  );
}

const paraStyle = {
  margin: '10px 0'
};

export default About;
