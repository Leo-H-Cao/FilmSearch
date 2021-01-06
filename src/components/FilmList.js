import React from "react";
import { connect } from "react-redux";
import { Row, Col, Statistic, Card, Avatar, Button } from "antd";
import { fetchMovies } from "../actions";
import { UserOutlined } from "@ant-design/icons";

class FilmList extends React.Component {
  compare = (a, b) => {
    return b.popularity - a.popularity;
  };

  renderRatings = (movie) => {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Voters"
            value={movie.vote_count}
            prefix={<Avatar icon={<UserOutlined />} />}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="User Score"
            value={movie.vote_count === 0 ? "-" : movie.vote_average}
            suffix="/ 10"
          />
        </Col>
      </Row>
    );
  };

  renderfilm = (movie) => {
    return (
      <div key={movie.id}>
        <Card style={{ width: 1335 }}>
          <h2>
            {movie.title}{" "}
            {movie.release_date ? `(${movie.release_date.slice(0, 4)})` : ""}
            <div className="view-button">
              <Button
                href={`https://www.themoviedb.org/movie/${movie.id}`}
                type="primary"
              >
                View
              </Button>
            </div>
          </h2>

          <Row>
            <Col flex="200px">
              <img
                alt="movie poster"
                className="poster"
                width="200px"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    : "image-not-available.jpg"
                }
              />
            </Col>
            <Col className="description" flex="1065px">
              <div>
                <h3>Overview:</h3>
                {movie.overview}
              </div>
              <br></br>
              <div className="ratings">
                <h3>Ratings:</h3>
                {this.renderRatings(movie)}
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  };

  renderList() {
    if (!this.props.term || !this.props.searched) return null;
    if (this.props.movies.length === 0)
      return <h2>No results. Try another search </h2>;
    return this.props.movies
      .sort(this.compare)
      .slice((this.props.currentPage - 1) * 10, this.props.currentPage * 10)
      .map((movie) => this.renderfilm(movie));
  }
  render() {
    return (
      <div>
        <br></br>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    movies: state.movies,
    currentPage: state.currentPage,
    term: state.searchTerm,
    searched: state.searched,
  };
};

export default connect(mapStateToProps, { fetchMovies })(FilmList);
