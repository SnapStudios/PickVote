import React, { Component, useState } from "react";
import { Container, Button, Modal, Spinner, Form } from "react-bootstrap";
import {
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useLocation,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

import Picker from "./Picker.jsx"


const cookies = new Cookies();

class PickVote extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <Container fluid> 
        <HashRouter>

          <Switch>
            <Route path="/:id" render={({ match }) => (
              <div>
                Welcome to {match.params.id}

                <Picker url={this.props.url}/>

              </div>
            )} />


            <Route path="/">
              <div>
                <Redirect to={"/welcome"}></Redirect>
              </div>
            </Route>

          </Switch>

        </HashRouter>

      </Container>
    );
  }
}


export default PickVote;