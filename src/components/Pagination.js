import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={"< previous"}
      nextLabel={"next >"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
