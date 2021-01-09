import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import store from "../redux/store/store";
class RouterRoute extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/blog/:id" extact component={Blog} />
          </Router>
        </Provider>
      </>
    );
  }
}

export default RouterRoute;
