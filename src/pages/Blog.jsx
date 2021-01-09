import { Component } from "react";
import { connect } from "react-redux";
import blogActionGentretor from "../redux/actions/blogAction.gentretor";
// import blogIDActionGentretor from "../redux/actions/blogIdAction.gentretor";
import { blogActionType } from "../redux/constant/blogAction.type";

class Blog extends Component {
  componentDidMount = () => {
    let id = this.props.match.params.id;
    this.props.findById(id);
  };
  render() {
    return (
      <div>
        <h1>blog</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    blog: state,
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
