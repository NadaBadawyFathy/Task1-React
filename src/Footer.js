import { Component } from "react";

export class Footer extends Component {
    state = {}

    render() {
        return (
            <div className="footer text-white" style={{backgroundColor:"#728FCE"}}>
                <div className="container">
                    <footer className="pt-5">
                        <div className="row">
                            <div className="col-6 col-md-2 mb-3">
                                <h5 className="mb-4">Your name.</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-4"><a href="#n" className="nav-link p-0 text-dark">Nada</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-2 mb-3">
                                <h5 className="mb-4 text-dark">Links</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-4"><a href="#n" className="nav-link p-0 text-white">Home</a></li>
                                    <li className="nav-item mb-4"><a href="#n" className="nav-link p-0 text-white">Shop</a></li>
                                    <li className="nav-item mb-4"><a href="#n" className="nav-link p-0 text-white">About</a></li>
                                    <li className="nav-item mb-4"><a href="#n" className="nav-link p-0 text-white">Contact</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-2 mb-3">
                                <h5 className="mb-4 text-dark" >Help</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-4"><a href="#n" className="nav-link p-0 text-white">Payment Options</a></li>
                                    <li className="nav-item mb-4"><a href="#n" className="nav-link p-0 text-white">Returns</a></li>
                                    <li className="nav-item mb-4"><a href="#n" className="nav-link p-0 text-white">Privacy Policies</a></li>
                                </ul>
                            </div>

                            <div className="col-md-5 offset-md-1 mb-3">
                                <form>
                                    <h5 className="mb-4 text-dark" >Newsletter</h5>
                                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                        <input id="newsletter1" type="email" className="form-control" placeholder="Enter Your Email address" />
                                        <button className="btn text-white border-bottom" type="button">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="py-4 mt-4 border-top">
                            <p>© 2024 Created With Love By Nada Badawy</p>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}
