import { Component } from "react"

import landing from "./assests/landing.png";

export class Home extends Component {

    state = {}

    render() {

    return (
    <div>
        <div class="list-group">
            <a href="#home" class="list-group-item list-group-item-action">Home</a>
            <a href="#about" class="list-group-item list-group-item-action">About</a>
            <a href="#contact" class="list-group-item list-group-item-action">Contact</a>
        </div>
        <div className="landing text-white bg-black" id="home" style={{padding:'80px 0' }}>
            <div className="container d-flex justify-content-around">
                <div className="box float-start">
                    <h1 className="mb-4" style={{fontSize:'50px'}}>I'm Nada</h1>
                    <p className="mb-4" style={{fontSize:"25px"}}>FrontEnd developer & Graphic designer </p>
                    <div className="icons mb-5">
                        <a className="text-decoration-none d-flex justify-content-center align-items-center rounded-circle bg-white me-2 float-start" style={{width: '40px', height: '40px', color:'rgb(5 150 105)'}} href="https://www.instagram.com/nad_a4537?igsh=N3o4dGlhZzZuOWE0"><i class="fa-brands fa-instagram fa-lg"></i></a>
                        <a className="text-decoration-none d-flex justify-content-center align-items-center rounded-circle bg-white me-2 float-start" style={{width: '40px', height: '40px', color:'rgb(5 150 105)'}} href="https://www.facebook.com/profile.php?id=100040850779325&mibextid=ZbWKwL"><i class="fa-brands fa-facebook fa-lg"></i></a>
                        <a className="text-decoration-none d-flex justify-content-center align-items-center rounded-circle bg-white me-2 float-start" style={{width: '40px', height: '40px', color:'rgb(5 150 105)'}} href="https://www.linkedin.com/in/nada-badawy-6431902a0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMcsKLJHiRte4ePdJmf33EA%3D%3D"><i class="fa-brands fa-linkedin fa-lg"></i></a>
                        <a className="text-decoration-none d-flex justify-content-center align-items-center rounded-circle bg-white" style={{width: '40px', height: '40px', color:'rgb(5 150 105)'}} href="https://github.com/NadaBadawyFathy"><i class="fa-brands fa-github fa-lg"></i></a>
                    </div>
                </div>
                <div className="img">
                    <img className="d-none d-lg-block" style={{width:'400px'}} src={landing} alt="" />
                </div>
            </div>
        </div>
    </div>
        )
    }

}