import { Component } from "react";

import about from './assests/about.png';

export class About extends Component {
    state = {};

    render(){
        return (
            <div className="about" id="about">
                <div className="container">
                    <div className="img">
                        <img src={about} alt=""/>
                    </div>
                    <div className="box">
                        <h1>Code And Coffee</h1>
                        <p>I'm Nada Badawy, I'm 21 years old, I currently work independently as a FrontEnd developer, Graphic designer and UX|UI designer.</p>
                        <p>I am a passionate front-end developer and graphic designer dedicated to blending art and technology to create stunning and engaging user experiences. 
                            With my expertise in front-end development and graphic design.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}