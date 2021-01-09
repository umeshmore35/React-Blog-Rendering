import { Component } from "react";
import { connect } from "react-redux";
import BlogCard from "../component/BlogCard";
import blogActionGentretor from "../redux/actions/blogAction.gentretor";
import { blogActionType } from "../redux/constant/blogAction.type";
import styles from "./Home.module.css";
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
          <div className={styles["loading"]}>
            <h1>Loading</h1>
            <img
              src="https://samherbert.net/svg-loaders/svg-loaders/rings.svg"
              alt="load"
            />
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
