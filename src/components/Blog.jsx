import React, { useState } from "react";
import UnisversalPtop from "./UnisversalPtop";
import BlogDatas from "./BlogDatas";
import Pagination from "./Pagination";
const Blog = () => {
  const [data, setData] = useState(BlogDatas);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section id="blog">
      <UnisversalPtop pageName="Blog" />
      <div className="blog-container">
        {currentItems.map((blog, index) => {
          const { image, tag, title, author } = blog;
          return (
            <div className="blog" key={index}>
              <div className="blog-image">
                <img src={image} alt="" />
              </div>
              <span>{tag}</span>
              <h5 className="blogTitle">{title}</h5>
              <p>{author}</p>
            </div>
          );
        })}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </section>
  );
};

export default Blog;
