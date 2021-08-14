import React, { Component } from "react";

class About extends Component {
  handleSave = () => {
    this.props.history.replace('/movies');
  };

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat reiciendis est? 
          Cum ducimus illo, rem impedit nemo voluptatum dignissimos eligendi
           sit suscipit iste odio sapiente cupiditate aliquid sint ratione.
           Repellendus architecto ea saepe sit, animi nostrum velit doloremque eum molestiae minus, 
           eveniet libero voluptas officiis sed odio debitis! Corporis omnis reiciendis libero
           consequuntur maxime quod cupiditate nulla minima {this.props.match.params.id}
        </p>
        <p>
          <button type="button" className="btn-sm btn-primary" onClick={this.handleSave}>Save</button>
        </p>
      </div>
    );
    
  }
};

export default About;
