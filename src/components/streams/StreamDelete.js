import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStream, fetchStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.id);
  }

  handleDelete = () =>{
      this.props.deleteStream(this.props.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button onClick={this.handleDelete} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
      if(!this.props.stream){
          return "Are you sure you want to delete this stream?";
      }
      return `Are you sure you want to delete the stream with title: ${this.props.stream.title}?`
  }

  render() {
    // if (!this.props.stream) {
    //   return (
    //     <div>
    //       <Modal title="Loading" />
    //     </div>
    //   );
    // }
    return (
        <Modal
          title="Delete a Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => {
            history.push("/");
          }}
        />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
