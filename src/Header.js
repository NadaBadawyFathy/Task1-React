import { Component } from "react";

export class Header extends Component {
    state = {}

    render(){
        return (
            <div className="navbar navbar-expand-lg pt-3 pb-3 border-bottom" style={{backgroundColor:"#728FCE"}}> 
                <div className="container">
                    <a href="#n" className="navbar-brand text-white"><h1>Web<span className="text-dark">Dev</span></h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{borderColor:"white", boxShadow:"none"}}>
                        <i className="fa-solid fa-bars text-white" style={{fontSize:"26px"}}></i>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <a href="#home" className="nav-link active display-inline-block text-decoration-none text-white">Home</a>
                            <a href="#about" className="nav-link display-inline-block text-decoration-none text-white">About</a>
                            <a href="#contact" className="nav-link display-inline-block text-decoration-none text-white">Contact</a>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
