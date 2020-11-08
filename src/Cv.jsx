import React from 'react'
import { Container, Grid, Icon, Divider, Header, List } from "semantic-ui-react"


const Cv = () => {
    return (
        <Container>
         <h1 id="cv-header">Curriculum vitae</h1>

    <div id="work-experience">
      <Divider horizontal>
        <Header as="h3">
            Work Experience 
        </Header>
      </Divider>
      
      <Grid columns={1} textAlign="left">
        <Grid.Column width={12}>
            <p>
            2016 – present: &ensp;Eckenstam AB.
            <br></br>
            2014 – 2016: &ensp;&ensp;&ensp;Carlsquare, financial analyst.
            <br></br>
            Early years: &ensp;&ensp;&ensp;&ensp;&ensp;Pig farm & Horse ranch, farmhand.
            </p>
        </Grid.Column>
      </Grid>
    </div>
    <br></br>

    <div id="education">
      <Divider horizontal>
        <Header as="h3">
            Education
        </Header>
      </Divider>

      <Grid columns={1} textAlign="left">
        <Grid.Column width={12}>
            <p>
            2020:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Craft Academy, Fullstack developer.
            <br></br>
            2014 – 2016: &ensp;&ensp;&ensp;Stockholm School of Economics, Master in Economics and Business.
            </p>
        </Grid.Column>
      </Grid>
    </div>
    <br></br>

    <div id="Computer-literacy">
      <Divider horizontal>
        <Header as="h3">
        Computer literacy
        </Header>
      </Divider>
      <Grid columns={1} textAlign="left">
        <Grid.Column width={12}>
            <p>
            HTML | CSS | JavaScript | React | Ruby | Cypress | Rspec 
            </p>
        </Grid.Column>
      </Grid>
    </div>
    <br></br>
                   
 </Container>
    );
};


export default Cv;