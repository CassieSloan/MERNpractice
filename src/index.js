import React from "react";
import ReactDom from "react-dom"
// import Express from "express";
import Mongoose from "mongoose";
import Mongo from "mongodb";
// import Nodemon from "nodemon";
import Router from "react-router-dom";

import App from "./componants/app";

ReactDom.render(
    <App />,
    document.querySelector("#root")
);

