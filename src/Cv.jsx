import React from 'react'
import { Container, Grid, Divider, Header } from "semantic-ui-react"


const Cv = () => {
    return (
        <Container>
         <h1 id="cv-header">Curriculum vitae</h1>

         <div id="work-experience">
     
      <Grid columns={1} textAlign="left">
        <Grid.Column width={12}>
            <p>
            <i>An astute multi-faceted skåning with over a decade of experience within finance and management.<br></br>
            Today I run a consulting firm, specialized in business strategy and capital placement.<br></br>
            Currently studying Full Stack Web Development at Craft Academy. </i>
            </p>
        </Grid.Column>
      </Grid>
    </div>
    <br></br>
    
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
            2012:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Stockholm School of Economics, Master in Economics and Business.
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