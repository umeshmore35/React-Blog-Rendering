import { Component } from "react";
import { connect } from "react-redux";
import BlogContent from "../component/BlogContent";
import blogActionGentretor from "../redux/actions/blogAction.gentretor";
import { blogActionType } from "../redux/constant/blogAction.type";

class Blog extends Component {
  componentDidMount = () => {
    let id = this.props.match.params.id;
    this.props.findById(id);
  };
  componentDidUpdate = (prevprops) => {
    let id = this.props.match.params.id;
    if (this.props.match.params.id !== prevprops.match.params.id) {
      this.props.findById(id);
    }
  };
  render() {
    let { blog } = this.props;

    return (
      <div>
        <BlogContent {...blog} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blog: state.blogReducer.blog,
  };
};
const mapDispatchToProps = (dispacth) => {
  return {
    findById: (id) => {
      return dispacth(blogActionGentretor(blogActionType.THUNK, { id }));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
