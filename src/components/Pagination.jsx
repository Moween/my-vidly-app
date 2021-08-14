import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { numOfItemsToDisplay, itemsCount, currentPage, onPageChange } =
      this.props;
    // Number of pages to display
    const pagesCount = Math.ceil(itemsCount / numOfItemsToDisplay);

    if (pagesCount === 1) {
      return null;
    }

    // Use Lodash to create an array with three items, [1, 2, 3]
    const pages = _.range(1, pagesCount + 1);
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-start">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <button onClick={() => onPageChange(page)} className="page-link">{page}</button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
