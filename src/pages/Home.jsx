import { Component } from "react";
import { connect } from "react-redux";
import BlogCard from "../component/BlogCard";
import blogActionGentretor from "../redux/actions/blogAction.gentretor";
import { blogActionType } from "../redux/constant/blogAction.type";

class Home extends Component {
  componentDidMount = () => {
    this.props.addUser();
  };

  render() {
    let { state } = this.props;
    return (
      <div>
        {state ? (
          state.map((blog, index) => {
            return <BlogCard key={index} {...blog} />;
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
