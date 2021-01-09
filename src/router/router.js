import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
class RouterRoute extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/blog/:id" extact component={Blog} />
        </Router>
      </>
    );
  }
}

export default RouterRoute;
