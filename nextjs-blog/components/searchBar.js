import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyCiZbQgW_osNuaQNxXcFwk_3yuo6_kL7dc";

class Searchbar extends React.Component {
  state = {
    term: "",
  };
  handleChange = (event) => {
    console.log("handleChange");
    this.setState({
      term: event.target.value,
    });
    console.log(this.state.term);
  };
  handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    console.log(this.state.term);
    YTSearch({ key: API_KEY, term: this.state.term, amount: 20 }, (data) => {
      console.log(data);
    });
    // axios
    //   .get({
    //     baseURL: "https://www.googleapis.com/youtube/v3/",
    //     params: {
    //       part: " snippet",
    //       maxResults: 5,
    //       q: this.state.term,
    //       key: KEY,
    //     },
    //   })
    //   .then((res) => {
    //     console.log("axios res", res);
    //   })
    //   .catch((err) => {
    //     console.log("axios error", err);
    //   });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="video-search">Video Search: </label>
            <input
              onChange={this.handleChange}
              name="video-search"
              type="text"
              value={this.state.term}
            />
          </div>
          <Button type="submit" variant="success">
            Search
          </Button>
        </form>
      </div>
    );
  }
}
export default Searchbar;
