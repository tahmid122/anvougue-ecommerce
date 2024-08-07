import React, { useState } from "react";

const Pagination = ({ itemsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [activePage, setActivePage] = useState(1);
  const handlePageClick = (number) => {
    setActivePage(number);
  };
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => {
            return (
              <li key={number}>
                <button
                  onClick={() => {
                    handlePageClick(number);
                    paginate(number);
                  }}
                  style={
                    activePage === number
                      ? { backgroundColor: "black", color: "white" }
                      : null
                  }
                >
                  {number}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
