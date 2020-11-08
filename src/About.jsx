import React from 'react';
import { Container, Grid, Icon } from "semantic-ui-react";

const About = () => {
    return (
      <Container>
        <h1 id="about-header">About Me</h1>
        <br></br>

  <Grid columns='two' divided>
    <Grid.Row>
      <Grid.Column>
      <Icon name="laptop" size="big" />
      <br></br>
      <p>Currently enrolled in Craft Academy Boothcamp</p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
      <Icon name="dollar sign" size="big" />
      <br></br>
      <p>Working as financial consultant</p>
      </Grid.Column>
     </Grid.Row>

    <Grid.Row>
      <Grid.Column>
      <Icon name="home" size="big" />
      <br></br>
      <p>Living in Stockholm - Sweden</p>
      </Grid.Column>
    </Grid.Row>
  
  </Grid>
          </Container>
    );
};

export default About;