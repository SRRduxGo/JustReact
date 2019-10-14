import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "actions";
class CommentBox extends React.Component {
  state = { comment: "Not initialized" };
  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            console.log("on submit event=" + this.state.comment);
            this.props.SaveComment(this.state.comment);
            this.setState({ comment: "" });
          }}
        >
          <h4>Add a comment</h4>
          <textarea
            onChange={event => {
              console.log("on change event");
              this.setState({ comment: event.target.value });
            }}
            value={this.state.comment}
          />
          <div>
            <button>Submit comment</button>
            <button
              id="fetchButton"
              onClick={event => {
                event.preventDefault();
                this.props.FetchComment();
              }}
            >
              Fetch Comments
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actionCreators
)(CommentBox);
