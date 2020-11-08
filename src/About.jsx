import React from 'react';
import { Container } from "semantic-ui-react";

const About = () => {
    return (
        <Container>
        <h1 id="about-header">About Me</h1>
        <div class="ui list">
  <div class="item">
    <i class="marker icon"></i>
    <div class="content">
      Stockholm, SWE
    </div>
  </div>
  <div class="item">
    <i class="mail icon"></i>
    <div class="content">
      <a href="mailto:jack@semantic-ui.com">erik@halleryd.se</a>
    </div>
  </div>
  <div class="item">
    <i class="linkify icon"></i>
    <div class="content">
      <a href="https://github.com/Ehugo2000">GitHub</a>
    </div>
  </div>
</div>
        </Container>
    );
};

export default About;