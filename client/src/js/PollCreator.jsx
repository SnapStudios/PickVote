import React, { Component, useState } from "react";
import { Container, Button, Modal, Spinner, Form } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class PollCreator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pollName: "",
            options: [],
        }
    }

    createOnServer = () => {
        fetch(this.props.url + "/post/create/poll",
        {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                poll:{
                    id: "testpoll",
                    options: [],
                }
            })
        }
        ).then(res => res.json()).then(res => {
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
                    value={this.state.pollName}
                    onChange={(e) => this.setState({ pollName: e.target.value })}
                ></input>
                <Button onClick={this.createOnServer}> Create</Button>

                <div className="server-content">{this.state.serverContent}</div>

            </div>
        );
    }
}


export default PollCreator;