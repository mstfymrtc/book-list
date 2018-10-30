import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectBook } from "../actions/index";
//redux aware componentlere "container" denir.
//app'in books ile alakası olmadığı için,onu reduxa bulaştırmadık.
class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li
        //TODO:BURAYA DİKKAT ET! ONLICKTE CALLBACK TARZI FONKSİYON
        //TODO:KULLANDI
        onClick={() => this.props.selectBook(book)}
        key={book.title}
        className="list-group-item"
      >
        {book.title}
      </li>
    ));
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectBook: selectBook
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
