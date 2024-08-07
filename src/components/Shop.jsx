import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import UnisversalPtop from "./UnisversalPtop";
import { HiXMark } from "react-icons/hi2";
const categories = ["TOP", "T-SHIRT", "DRESS", "SETS", "SHIRT"];
import { TbFilterCog } from "react-icons/tb";
import { BsGrid1X2 } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { BsGrid3X2Gap } from "react-icons/bs";
const Icons = [
  {
    icon: <BsGrid1X2 className="icon-i-style" />,
    width: "31%",
  },
  {
    icon: <BsGrid className="icon-i-style" />,
    width: "23%",
  },
  {
    icon: (
      <BsGrid3X2Gap className="icon-i-style" style={{ fontSize: "22px" }} />
    ),
    width: "18%",
  },
];
const Sizes = ["S", "M", "L", "XL"];
const Colors = ["pink", "red", "green", "yellow", "purple", "black", "blue"];
const Brands = ["Adidas", "Hermes", "Zara", "Nike", "Gucci"];

import allProducts from "./AllProducts";

import SingleProduct from "./SingleProduct";
import Pagination from "./Pagination";
const Shop = () => {
  const [activeIconStyle, setActiveIconStyle] = useState(0);
  const [activeMenuStyle, setActiveMenuStyle] = useState("");
  const [gridStyle, setGridStyle] = useState("31%");
  const [dressName, setDressName] = useState("Shop");
  const [sizeName, setSizeName] = useState("");
  const [rangeValue, setRangeValue] = useState("");

  const [showFilterContainer, setShowFilterContainer] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(false);

  const [filterIsTrue, setFilterIsTrue] = useState(true);

  const filters = [
    {
      icon: <HiXMark />,
      text: filterCategory,
    },
  ];
  const findCatNum = (sCat) => {
    const final = allProducts.filter((ap) => {
      return ap.category === sCat;
    });
    return final.length;
  };
  //
  const [productsAll, setProductsAll] = useState(allProducts);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const handleMouseOver = (index) => {
    setHoveredProduct(index);
  };

  const handleMouseOut = () => {
    setHoveredProduct(null);
  };
  const filterRange = (e) => {
    const finalRange = allProducts.filter((fr) => {
      return fr.newPrice <= e.target.value;
    });
    setProductsAll(finalRange);
    console.log(e.target.value);
    console.log(finalRange);
  };
  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const totalPages = Math.ceil(productsAll.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = productsAll.slice(startIndex, endIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // change products
  const filteredProducts = (proName) => {
    const finalFilter = allProducts.filter((sPro) => {
      return sPro.category === proName;
    });
    setProductsAll(finalFilter);
  };
  const [isTrue, setIsTrue] = useState(true);
  const checkFilter = (is) => {
    const checkFinal = productsAll.filter((chF) => {
      return chF.tooltip === "SALE";
    });
    if (is) {
      setProductsAll(checkFinal);
    } else {
      setProductsAll(allProducts);
    }
  };
  const selectFilter = (value) => {
    if (value === "A to Z") {
      productsAll.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    if (value === "Z to A") {
      productsAll.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (value === "Price High To Low") {
      productsAll.sort((a, b) => {
        if (a.newPrice > b.newPrice) {
          return -1;
        }
        if (a.newPrice < b.newPrice) {
          return 1;
        }
        return 0;
      });
    }
    if (value === "Price Low To High") {
      productsAll.sort((a, b) => {
        if (a.newPrice > b.newPrice) {
          return 1;
        }
        if (a.newPrice < b.newPrice) {
          return -1;
        }
        return 0;
      });
    } else {
      setProductsAll(allProducts);
    }
  };
  return (
    <section id="shop">
      <div className="shop-upper">
        <UnisversalPtop pageName={dressName} />
        <img src="images/carousel (1).png" alt="" />
        <ul>
          {categories.map((sCat, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  filteredProducts(sCat);
                  setDressName(sCat);
                  setActiveMenuStyle(index);
                  setFilterCategory(sCat);
                  setFilterIsTrue(true);
                  setFilterDisplay(true);
                }}
                className={activeMenuStyle === index ? "activeMenuStyle" : null}
              >
                {sCat}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="shop-main-container">
        <div className="filter-header">
          <div className="fh-left">
            <span
              style={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => {
                setShowFilterContainer(!showFilterContainer);
              }}
            >
              <TbFilterCog style={{ fontSize: "30px", marginRight: "5px" }} />
              <span>Filters</span>
            </span>
            {Icons.map((icons, index) => {
              const { icon, width } = icons;
              return (
                <span
                  key={index}
                  className={`icon-g-style ${
                    activeIconStyle === index ? "activeIconStyle" : null
                  }`}
                  onClick={() => {
                    setActiveIconStyle(index);
                    setGridStyle(width);
                  }}
                >
                  {icon}
                </span>
              );
            })}
            <span style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
                onClick={(e) => {
                  setIsTrue(!isTrue);
                  checkFilter(isTrue);
                }}
              />
              Show only products on sale
            </span>
          </div>
          <div className="fh-right">
            <span>Sort By</span>
            <span>
              <select
                onClick={(e) => {
                  selectFilter(e.target.value);
                }}
                defaultValue={"Sorting"}
              >
                <option value="Sorting" disabled>
                  Sorting
                </option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
                <option value="Price High To Low">Price High To Low</option>
                <option value="Price Low To High">Price Low To High</option>
              </select>
            </span>
          </div>
        </div>
        <div
          className="trans"
          style={{
            display: `${showFilterContainer ? "block" : "none"}`,
          }}
        >
          <div
            className={`filter-container ${
              showFilterContainer ? "show-filter-container" : null
            }`}
          >
            <div className="pro-type">
              <h5>Product Type</h5>

              {
                <ul>
                  {categories.map((sCat, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => {
                          filteredProducts(sCat);
                          setDressName(sCat);
                          setActiveMenuStyle(index);
                          setFilterCategory(sCat);
                          setFilterIsTrue(true);
                          setFilterDisplay(true);
                        }}
                        className={
                          activeMenuStyle === index ? "activeMenuStyle" : null
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        {sCat} <span>({findCatNum(sCat)})</span>
                      </li>
                    );
                  })}
                </ul>
              }
            </div>
            <div className="size-price">
              <div className="size">
                <h5 style={{ fontWeight: "bold" }}>Size</h5>
                <br />
                <div
                  className="size-al"
                  style={{ marginTop: "-15px", padding: "0" }}
                >
                  {Sizes.map((size, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => {
                          setSizeName(size);
                          setFilterSize(size);
                        }}
                        className={sizeName === size ? "size-active" : null}
                      >
                        {size}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="price-range">
                <h5 style={{ marginTop: "20px", fontWeight: "bold" }}>
                  Price Range
                </h5>
                <input
                  type="range"
                  style={{ width: "100%", margin: "15px 0" }}
                  min={0}
                  max={100}
                  defaultValue={0}
                  onChange={(e) => {
                    setRangeValue(e.target.value);
                    filterRange(e);
                  }}
                />
                <span>Min price: ${rangeValue}</span>
              </div>
            </div>
            <div className="colors">
              <h5>Colors</h5>
              <div
                style={{
                  display: "inline-grid",
                  gridTemplateColumns: "auto auto auto",
                }}
              >
                {Colors.map((color, index) => {
                  return (
                    <span
                      className="colorDiv"
                      key={index}
                      onClick={() => {
                        setFilterColor(color);
                      }}
                    >
                      <span
                        className="colorPrim"
                        style={{ backgroundColor: color }}
                      ></span>
                      {color}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="brands">
              <h5>Brands</h5>
              <div className="brand-list">
                {Brands.map((brand, index) => {
                  return (
                    <span
                      key={index}
                      style={{ display: "flex", alignItems: "center" }}
                      onClick={() => {
                        setFilterBrand(brand);
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "10px",
                        }}
                      />
                      {brand}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="how-much">
          <span style={{ display: "block", height: "50px" }}>
            {productsAll.length} &nbsp;
            <span style={{ opacity: "0.7" }}>Products Found</span>
            <span className="filterNames">
              {filters.map((filter, index) => {
                return (
                  <span
                    key={index}
                    style={{ display: `${filterDisplay ? "inline" : "none"}` }}
                    onClick={() => {
                      setFilterDisplay(index);
                      setFilterIsTrue(false);
                      setProductsAll(allProducts);
                    }}
                    className={filterIsTrue ? null : "onShow"}
                  >
                    {filter.icon} {filter.text}
                  </span>
                );
              })}

              <span
                id="clear-all"
                style={{
                  backgroundColor: "white",
                  display: `${filterDisplay ? "inline" : "none"}`,
                }}
                className={filterIsTrue ? null : "onShow"}
                onClick={() => {
                  setProductsAll(allProducts);
                  setFilterIsTrue(false);
                  setFilterDisplay(false);
                }}
              >
                <HiXMark /> Clear All
              </span>
            </span>
          </span>
        </div>
      </div>
      <section className="whats-new">
        <SingleProduct
          productsAll={currentItems}
          hoveredProduct={hoveredProduct}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
          width={gridStyle}
        />
      </section>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalPosts={productsAll.length}
        paginate={paginate}
      />
      <Footer />
    </section>
  );
};

export default Shop;
