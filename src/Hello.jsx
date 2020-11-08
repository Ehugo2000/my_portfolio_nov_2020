import React from "react";
import { Container } from "semantic-ui-react";

const Hello = () => {
    return (
        <Container>
            <h3 id="hello">Hello World,</h3>
            <h2>Feel free to browse around and check out<br></br>my current web development projects.</h2>
            <br></br>
            
<div>
    <a href="mailto:eh.softwareanddesign@gmail.com">
    <div class="ui animated fade button" >
    <div class="visible content"><h3>Reach out</h3></div>
    <div class="hidden content">
    email me!
    </div>
</div>
</a>
    </div>
        </Container>
    );
};

export default Hello