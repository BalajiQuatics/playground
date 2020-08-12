import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      values: ""
    };
  }

  // handleChange = e => {
  //   let values = e.target.value;
  //   this.setState({ values });
  // };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          id="firstbtn"
          onClick={() => this.setState({ isShow: !this.state.isShow })}
        >
          Click me
        </button>
        {this.state.isShow && <p>Show me when i was clicked</p>}

        <input
          id="nin"
          type="text"
          value={this.state.values}
          onChange={e => {
            this.setState({ values: e.target.value });
          }}
        />
      </div>
    );
  }
}
export default Test;
