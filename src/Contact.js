import { Component } from "react";

export class Contact extends Component {
    state = {}

    render(){
        return (
        <div className="contact" id="contact">
            <h1>Contact Us</h1>
            <div className="container">
                <form>
                    <input type="text" placeholder="Your Name"/>
                    <textarea placeholder="Your Message" rows="6"></textarea>
                    <input type="text" placeholder="Your Phone"/>
                    <input type="text" placeholder="Your Email"/>
                    <input type="text" placeholder="Subject"/>
                    <button>Send</button>
                </form>
            </div>
        </div>
        )
    }
}

