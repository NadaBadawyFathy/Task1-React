import { Component } from "react";

export class Contact extends Component {
    state = {}

    render(){
        return (
        <div className="contact pt-5 pb-5" id="contact">
            <h1 className="fst-italic text-center text-dark mb-5">Contact Us</h1>
            <div className="container">
                <div className="box">
                    <form action="">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control rounded-pill border-primary shadow-none" placeholder="First name"/>
                            </div>
                            <div className="col-6">
                                <input type="text" className="form-control rounded-pill border-primary shadow-none" placeholder="Last name"/>
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control mt-4 rounded-pill border-primary shadow-none" placeholder="Email"/>
                            </div>
                            <div className="col-12">
                                <textarea className="form-control mt-4 border-primary shadow-none" style={{resize: "none"}} rows="7" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <button type="send" className="btn mt-3 ps-5 pe-5 text-white fs-5 d-block m-auto bg-dark">Send</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

