import React, { Component, useState } from "react";
import { Container, Button, Modal, Spinner, Form } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class PollViewer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            serverContent: {},
        }
    }

    updateFromServer = () => {
        fetch(this.props.url + "/get/poll/testpoll" + this.state.pickerValue).then(res => res.json()).then(res => {
            let text = res.text;

            this.setState({
                serverContent: text,
            });

        });
    }


    render() {
        return (
            <div className="picker">
                <Button onClick={this.updateFromServer}> Update</Button>
                {
                    // check if servercontnet is actually set before trying to render it
                    this.state.serverContent ? <div className="server-content">{this.state.serverContent.id}</div> : ""
                }
            </div>
        );
    }
}


export default PollViewer;