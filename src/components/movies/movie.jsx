import React, { Component } from "react";

class MovieDetails extends Component {
  handleSave = () => {
    const { history } = this.props;
    history.replace('/');
  };

  render() {
    const { match } = this.props;

    return (
      <div>
        <p>Movie Form {match.params.id}</p>
        <p>
          <button
            type="button"
            className="btn-sm btn-primary btn"
            onClick={this.handleSave}
          >
            Save
          </button>
        </p>
      </div>
    );
  }
}

export default MovieDetails;
