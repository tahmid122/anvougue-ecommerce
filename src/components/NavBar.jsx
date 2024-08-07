import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { SlHandbag } from "react-icons/sl";
import { RiMenu2Fill } from "react-icons/ri";
import { GiCrossedBones } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
//
import CartProducts from "./CartProducts";
import CartProducts2 from "./CartProducts2";

const NavBar = () => {
  const [isActive, setisActive] = useState(true);
  const [isHide, setIsHide] = useState(false);
  const [isCartHide, setisCartHide] = useState(false);
  const [cartProducts, setCartProducts] = useState(CartProducts);
  const [proList, setProList] = useState(CartProducts2);
  const [shipValue, setShipValue] = useState(0);
  const [total, setTotal] = useState(0);
  const addToCart = (data) => {
    const { Dimage, name, newPrice, index } = data;
    setProList([...proList, data]);
    console.log(proList);
  };
  const removeFromCart = (name) => {
    const filterCart = proList.filter((items) => {
      return items.name !== name;
    });
    setProList(filterCart);
  };
  const handleShow = () => {
    setisActive(false);
  };
  const handleHide = () => {
    setisActive(true);
  };

  let menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsHide(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <section id="navBar">
      <RiMenu2Fill className="hamburger" onClick={handleShow} />
      <div className="NB-left">
        <div className="NBL-logo">
          <span>Anvougue</span>
        </div>
        <div
          className="NBL-menu"
          style={{ display: isActive ? null : "block" }}
        >
          <ul>
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={"/features"}>FEATURES</NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>SHOP</NavLink>
            </li>
            <li>
              <NavLink to={"/product"}>PRODUCT</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>BLOG</NavLink>
            </li>
            <li style={{ position: "relative" }} className="wantHover">
              <NavLink to={"/pages/about"}>PAGES</NavLink>
              <div className="hoverPages">
                <span style={{ marginTop: "15px" }}>
                  <NavLink to={"/pages/about"}>About Us</NavLink>
                </span>
                <span>
                  <NavLink to={"/pages/contact"}>Contact Us</NavLink>
                </span>
                <span>
                  <NavLink to={"/pages/stores"}>Store Lists</NavLink>
                </span>
                <span>
                  <NavLink to={"/pages/faqs"}>FAQs</NavLink>
                </span>
              </div>
            </li>
            <div className="cross-menu">
              <GiCrossedBones className="cross" onClick={handleHide} />
            </div>
          </ul>
        </div>
      </div>
      <div className="NB-right">
        <HiOutlineMagnifyingGlass
          className="menu-icon"
          style={{ borderRight: "1px solid black", width: "50px" }}
        />

        <AiOutlineUser
          className="menu-icon"
          onClick={() => {
            setIsHide(!isHide);
          }}
        />

        <FaRegHeart className="menu-icon" />

        <div className="cart">
          <SlHandbag
            className="menu-icon"
            onClick={() => {
              setisCartHide(!isCartHide);
            }}
          />
          <span>{proList.length}</span>
        </div>
      </div>
      <div className={`log-res ${isHide ? null : "onShow"}`} ref={menuRef}>
        <NavLink to={"/login"}>
          <button>LOGIN</button>
        </NavLink>
        <p style={{ padding: "0", textAlign: "left", fontSize: "15px" }}>
          <span style={{ opacity: "0.8" }}>Don't have an account?</span>{" "}
          <NavLink to={"/register"}>Register</NavLink>
        </p>
        <hr />
        <a href="#" style={{ fontSize: "18px" }}>
          Support
        </a>
      </div>
      <div className={`cart-box ${isCartHide ? "show-cart" : "hide-cart"}`}>
        <div
          className="x-mark"
          onClick={() => {
            setisCartHide(false);
          }}
        >
          <FaXmark />
        </div>
        <div className="cart-left">
          <h5 style={{ fontWeight: "bold" }}>You May Also Like</h5>

          {cartProducts.map((carPro, index) => {
            const { Dimage, name, newPrice } = carPro;
            return (
              <div className="cb-pro-container" key={index}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <div className="cbc-image">
                    <img src={Dimage} alt="" />
                  </div>
                  <div className="cbc-titlePrice">
                    <h6>{name}</h6>
                    <span>{newPrice}</span>
                  </div>
                </div>
                <div
                  className="cbc-cartLogo"
                  onClick={() => {
                    addToCart({ Dimage, name, newPrice, index });
                    setShipValue(shipValue + newPrice);
                    setTotal((total) => total + newPrice);
                  }}
                >
                  <IoBagOutline
                    style={{ fontSize: "25px" }}
                    className="cart-cbc"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-right">
          <h5 style={{ fontWeight: "bold" }}>Shopping Cart</h5>
          <div className="cr-container">
            <div className="ship-slider">
              <span>
                Buy <b>${shipValue > 150 ? "0.00" : `${150 - shipValue}`}</b>{" "}
                more to get <b>Freeship</b>
              </span>
              <input
                type="range"
                min={0}
                defaultValue={0}
                max={150}
                value={shipValue}
                disabled={true}
              />
            </div>
            <div className="products-lists">
              {proList.map((cspro, index) => {
                const { Dimage, name, newPrice } = cspro;
                return (
                  <div className="pro-l" key={index}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div className="pl-image">
                        <img src={Dimage} alt="" />
                      </div>
                      <div className="pl-desc">
                        <div className="pl-title">
                          <span style={{ fontWeight: "bold" }}>{name}</span>
                        </div>
                        <div className="pl-price">
                          <span>{newPrice}</span>
                        </div>
                      </div>
                    </div>
                    <div className="pl-remove">
                      <a
                        href="#"
                        onClick={() => {
                          removeFromCart(name);
                          setShipValue(shipValue - newPrice);
                          setTotal(total - newPrice);
                        }}
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="total-box">
              <div className="calculate">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="tb-buttons">
                <button id="viewCart">VIEW CART</button>
                <button>CHECK OUT</button>
              </div>
              <span
                style={{
                  textAlign: "center",
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                OR CONTINUE SHOPPING
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
