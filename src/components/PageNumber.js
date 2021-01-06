import { Pagination } from "antd";
import React from "react";
import { connect } from "react-redux";
import { changePage } from "../actions";

class PageNumber extends React.Component {
  onPageChange = (page) => {
    this.props.changePage(page);
  };
  render() {
    if (!this.props.searched || this.props.movies.length === 0) return null;
    return (
      <Pagination
        current={this.props.currentPage}
        total={this.props.movies.length}
        onChange={(page) => this.onPageChange(page)}
        hideOnSinglePage
      />
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
export default connect(mapStateToProps, { changePage })(PageNumber);
