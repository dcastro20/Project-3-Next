import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import YTSearch from "youtube-api-search";
// import Youtube from "react-youtube";

const API_KEY = "AIzaSyBvyTA_8gxKEaJ4ugET0uWiyhXrhIdxpDo";

function Searchbar() {
  const [term, setTerm] = useState("");
  const [videos, setVideos] = useState([]);

  const handleChange = (event) => {
    console.log("handleChange");
    setTerm(event.target.value);
    console.log(term);
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    console.log(term);
    YTSearch({ key: API_KEY, term: term }, (data) => {
      console.log(data);
      createRow(data);
    });
  };

  const createRow = (data) => {
    console.log("createRow");
    let videos = data.map((video) => {
      console.log("video.id.videoId", video.id.videoId);
    });
    setVideos(data);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="field"
        >
          <label htmlFor="video-search">
            <b>
              <h4>
              Didn't find a workout that suits you? Search for your favorites
              one here!
              </h4>
            </b>{" "}
          </label>
          <input
            onChange={handleChange}
            name="video-search"
            type="text"
            value={term}
          />
          <Button type="submit" variant="success">
            Search
          </Button>
        </div>

        <div>
          {videos.length ? (
            videos.map((video) => {
              console.log("youtube video.id.videoId", video.id.videoId);
              const url = `https://www.youtube.com/embed/${video.id.videoId}`;
              console.log("URL: ", url);
              return (
                <iframe
                  width={560}
                  height={315}
                  src={url}
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              );
            })
          ) : (
            <p> </p>
          )}
        </div>
      </form>
    </div>
  );
}
export default Searchbar;
