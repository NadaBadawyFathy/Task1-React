import { Component } from "react";

export class Skills extends Component {
    state = {}

    render(){
        return (
        <div className="skills pt-5 pb-5 bg-light" id="skills">
            <div className="container">
                <h1 className="fst-italic text-dark mb-5 border-bottom pb-3">Tech Stack</h1>
                <div className="imgs d-flex gap-5 flex-lg-row flex-column">
                    <div> 
                        <h4>HTML&CSS</h4>
                        <p className="text-secondary lh-lg">
                            Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.
                        </p>
                    </div>
                    <div> 
                        <h4>Javascript</h4>
                        <p className="text-secondary lh-lg">
                            Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality
                        </p>
                    </div>
                    <div> 
                        <h4>React</h4>
                        <p className="text-secondary lh-lg">
                            Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}