import React from "react";
import "@styles/wishlist.css";
import Image from "next/image";
import ResourceTopSection from "@components/ResourceTopSection";

const WishListPage = () => {
  return (
    <>
      <ResourceTopSection
        text="this is wishlist pages"
        WActiveStyle="c-active"
      />
      <section className="order-bg">
        <div className="form-container">
          <div className="logo-container">
            <Image
              src="/images/Logo.jpeg"
              width="200"
              height="180"
              className="logo"
            />
          </div>
          <div className="inputs-holder">
            <div className="input-left">
              <div className="email-holder">
                <label className="aut-lab" htmlFor="email">
                  {" "}
                  Email:{" "}
                </label>
                <input type="text" className="aut-inp" />
              </div>
              <div className="surname-holder">
                <label className="aut-lab" htmlFor="surname">
                  {" "}
                  Full Name:{" "}
                </label>
                <input type="text" className="aut-inp" />
              </div>

              <div className="phone-holder">
                <label className="aut-lab" htmlFor="phone">
                  {" "}
                  Phone:{" "}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                  className="aut-inp"
                />
              </div>

              <div className="textfield-holder">
                <label className="aut-lab" htmlFor="items">
                  Suggest Resources:
                </label>
                <textarea
                  className="aut-inp"
                  name="items"
                  id="items"
                ></textarea>
              </div>

              <div className="textfield-descrip-holder">
                <label className="aut-lab" htmlFor="items-descrip">
                  Leave a note:
                </label>
                <textarea
                  className="aut-inp"
                  name="items"
                  id="items"
                ></textarea>
              </div>
            </div>
            <div className="input-right">
              <Image
                src="/images/up-nurse.jpg"
                width="500"
                height="500"
                className="form-apple"
              />
            </div>
          </div>
          <div className="button-holder">
            <button className="order-btn" type="button">
              Make a Wish
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishListPage;
