import { Component } from "react";

class Blog extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>blog</h1>
      </div>
    );
  }
}

export default Blog;
