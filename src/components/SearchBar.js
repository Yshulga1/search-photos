import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  // 2 options to write the event handler  -- 1---
  //onInputChange(event) {
  //   console.log(event.target.value);
  // }

  onFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            {/* option  1 --- <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              value={this.state.term}
              //option 2 ---
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
