import { Component } from "react";

import about from './assests/about.png';

export class About extends Component {
    state = {};

    render(){
        return (
            <div className="about pt-5 pb-5" id="about">
                <div className="container d-flex justify-content-between align-items-center flex-lg-row flex-column gap-5 text-center">
                    <div className="img">
                        <img src={about} alt="" style={{width:"400px"}}/>
                    </div>
                    <div className="box" style={{maxWidth:"600px"}}>
                        <h1 className="pb-4 border-bottom fst-italic text-dark">Code And Coffee</h1>
                        <p className="text-secondary lh-lg">I'm Nada Badawy, I'm 21 years old, I currently work independently as a FrontEnd developer, Graphic designer and UX|UI designer.</p>
                        <p className="text-secondary lh-lg">I am a passionate front-end developer and graphic designer dedicated to blending art and technology to create stunning and engaging user experiences. 
                            With my expertise in front-end development and graphic design.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}