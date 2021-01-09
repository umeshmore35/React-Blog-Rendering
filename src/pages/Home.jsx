import { Component } from "react";
import { connect } from "react-redux";
import blogActionGentretor from "../redux/actions/blogAction.gentretor";
import { blogActionType } from "../redux/constant/blogAction.type";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.props.addUser().palyload.blogs ? (
          this.props.addUser().palyload.blogs.map((blog) => {
            console.log(blog);
            return (
              <div>
                <p>{blog.title}</p>;
              </div>
            );
          })
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.blogReducer.blogs,
  };
};

const mapDispatchToProps = (dispacth) => {
  return {
    addUser: () => {
      return dispacth(blogActionGentretor(blogActionType.GET));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
