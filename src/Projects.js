import { Component } from "react";

import img1 from "./assests/img1.png";
import img2 from "./assests/img2.png";
import img3 from "./assests/img3.png";
import img4 from "./assests/img4.png";
import img5 from "./assests/img5.png";
import img6 from "./assests/img6.png";
export class Projects extends Component {
    state = {}

    render(){
        return (
        <div className="projects pt-5 pb-5 bg-light" id="projects">
            <div className="container">
                <h1 className="fst-italic text-dark mb-5 border-bottom pb-3">Some Projects</h1>
                <div className="imgs d-grid gap-5" style={{gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))"}}>
                    <a href="https://nadabadawyfathy.github.io/MyCart-React/" className="bg-white text-center text-decoration-none" style={{boxShadow:"1px 1px 5px gray"}}>
                        <img class="mw-100" src={img1} alt=""/>
                        <h4 className="py-2 text-dark">My Cart</h4>
                    </a>
                    <a href="https://nadabadawyfathy.github.io/Problem_Solving/" className="bg-white text-center text-decoration-none" style={{boxShadow:"1px 1px 5px gray"}}>
                        <img class="mw-100" src={img2} alt=""/>
                        <h4 className="py-2 text-dark">Problem Solving</h4>
                    </a>
                    <a href="https://nadabadawyfathy.github.io/Portofolio/" className="bg-white text-center text-decoration-none" style={{boxShadow:"1px 1px 5px gray"}}>
                        <img class="mw-100" src={img3} alt=""/>
                        <h4 className="py-2 text-dark">Portfolio</h4>
                    </a>
                    <a href="https://nadabadawyfathy.github.io/Ik-developers/" className="bg-white text-center text-decoration-none" style={{boxShadow:"1px 1px 5px gray"}}>
                        <img class="mw-100" src={img4} alt=""/>
                        <h4 className="py-2 text-dark">Ik developers</h4>
                    </a>
                    <a href="https://nadabadawyfathy.github.io/Software_Product/" className="bg-white text-center text-decoration-none" style={{boxShadow:"1px 1px 5px gray"}}>
                        <img class="mw-100" src={img5} alt=""/>
                        <h4 className="py-2 text-dark">Software Product</h4>
                    </a>
                    <a href="https://nadabadawyfathy.github.io/Home_Remodeling/" className="bg-white text-center text-decoration-none" style={{boxShadow:"1px 1px 5px gray"}}>
                        <img class="mw-100" src={img6} alt=""/>
                        <h4 className="py-2 text-dark">Home Remodeling</h4>
                    </a>
                </div>
            </div>
        </div>
        )
    }
}