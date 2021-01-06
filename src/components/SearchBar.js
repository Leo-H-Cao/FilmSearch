import { Input } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { fetchMovies, searchTerm, searched, changePage } from "../actions";
import { connect } from "react-redux";

const { Search } = Input;

class SearchBar extends React.Component {
  onSubmit = (_, e) => {
    e.preventDefault();
    this.props.searched(true);
    this.props.fetchMovies(this.props.term);
    this.props.changePage(1);
  };

  onTermChange = (e) => {
    if (!e.target.value) this.props.searched(false);
    this.props.searchTerm(e.target.value);
  };

  render() {
    return (
      <div>
        <header>Search for a film:</header>
        <Search
          value={this.props.term}
          enterButton="Search"
          size="large"
          onChange={(e) => this.onTermChange(e)}
          onSearch={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return { term: state.searchTerm };
};

export default connect(mapStateToProps, {
  fetchMovies,
  searchTerm,
  searched,
  changePage,
})(SearchBar);
