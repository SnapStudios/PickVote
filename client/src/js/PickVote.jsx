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
import loader from "sass-loader";

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
              </div>
            )} />


            <Route path="/">
              <div>
                Welcome to main page
              </div>
            </Route>

          </Switch>

        </HashRouter>

      </Container>
    );
  }
}


export default PickVote;