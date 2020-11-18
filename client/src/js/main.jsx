import React from "react";
import ReactDOM from "react-dom";
import PickVote from "./PickVote.jsx";
const wrapper = document.getElementById("container");

ReactDOM.render(
        <div>
          {/* <PickVote url="http://192.252.233.232:4564" /> */}
          <PickVote url="http://127.0.0.1:4564" />
        </div>
, wrapper);



