import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { term: "" };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <Container
        className="search-bar"
        style={{ margin: "20px", textAlign: "center" }}
      >
        <input
          placeholder="Search for workouts that suit you!"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
          style={{ width: "80%" }}
        />
        <Button variant="success">Search</Button>
      </Container>
    );
  }
}

export default SearchBar;
