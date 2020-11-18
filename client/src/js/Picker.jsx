import React, { Component, useState } from "react";
import { Container, Button, Modal, Spinner, Form } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import loader from "sass-loader";

const cookies = new Cookies();

// this is just an example to show you how we could make calls to the backend
class Picker extends Component {

    constructor(props) {
        super(props);

        // for any state values(bascially like class variables) initialize them here
        this.state = {
            pickerValue: "",
            serverContent: "",
        }
    }

    // if you want to make class methods, follow this format
    updateFromServer = () => {
        fetch(this.props.url + "/get/" + this.state.pickerValue).then(res => res.json()).then(res => {
            let text = res.text;

            this.setState({
                serverContent: text,
            });

        });
    }


    render() {
        return (
            <div className="picker">
                <input
                    value={this.state.pickerValue}
                    onChange={(e) => this.setState({ pickerValue: e.target.value })}
                ></input>

                <Button onClick={this.updateFromServer}> Update</Button>
                <div className="server-content">{this.state.serverContent}</div>

            </div>
        );
    }
}


export default Picker;