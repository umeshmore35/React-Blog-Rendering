import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Navigation from "../component/Navigation/Navigation";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import store from "../redux/store/store";
class RouterRoute extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/blog/:id" extact component={Blog} />
              <Route exact component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </Provider>
      </>
    );
  }
}

export default RouterRoute;
