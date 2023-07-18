import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="info-quick-links">
          <div className="info-about">
            <div className="info-about-title">
              <h3>INFORMATION ABOUT</h3>
              <hr />
            </div>
            <div className="info-about-links">
              <ul>
                <li>
                  <a href="#">UHASS University</a>
                </li>
                <li>
                  <a href="#">Strategic Plan</a>
                </li>
                <li>
                  <a href="#">Courses fees and findings</a>
                </li>
                <li>
                  <a href="#">Data privacy/GDPR</a>
                </li>
                <li>
                  <a href="#">Statement on Modern Slavery</a>
                </li>
                <li>
                  <a href="#">Open days</a>
                </li>
                <li>
                  <a href="#">Libraries</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-for">
            <div className="info-for-title">
              <h3>INFORMATION FOR</h3>
              <hr />
            </div>
            <div className="info-for-links">
              <ul>
                <li>
                  <a href="#">Prospective Undergraduates</a>
                </li>
                <li>
                  <a href="#">Prospective Graduates</a>
                </li>
                <li>
                  <a href="#">Prospective Online/Distance Students</a>
                </li>
                <li>
                  <a href="#">Alumni</a>
                </li>
                <li>
                  <a href="#">Teachers</a>
                </li>
                <li>
                  <a href="#">Business/Partnerships</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="quick-link-box">
            <div className="quick-link-title">
              <h3>QUICK LINKS</h3>
              <hr />
            </div>
            <div className="quick-links">
              <ul>
                <li>
                  <a href="#">Any Questions?</a>
                </li>
                <li>
                  <a href="#">Jobs and vancancies</a>
                </li>
                <li>
                  <a href="#">Semester dates</a>
                </li>
                <li>
                  <a href="#">Map</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="connection">
          <div className="connection-content">
            <span>CONNECT WTH US</span>
            <div className="connect-icons">
              <a href="#">
                {" "}
                <img src="/icons/phone.png" alt="" />{" "}
              </a>
              <a href="#">
                {" "}
                <img src="/icons/gmail.png" alt="" />{" "}
              </a>
              <a href="#">
                {" "}
                <img src="/icons/whatsapp.png" alt="" />{" "}
              </a>
              <a href="#">
                {" "}
                <img src="/icons/facebook.png" alt="" />{" "}
              </a>
              <a href="#">
                {" "}
                <img src="/icons/instagram.png" alt="" />{" "}
              </a>
              <a href="#">
                {" "}
                <img src="/icons/twitter.png" alt="" />{" "}
              </a>
              <a href="#">
                {" "}
                <img src="/icons/youtube.png" alt="" />{" "}
              </a>
            </div>
          </div>

          <hr />
        </div>
        <div className="licence">
          <div className="licence-left">
            <i className="fa-regular fa-copyright"></i>
            <span> Nursing And Midwifery Student Association 2023 </span>
          </div>
          <div className="circle"></div>
          <div className="licence-middle">
            <span>All Right Reserved</span>
          </div>
          <div className="circle"></div>
          <div className="licence-right">
            <span>Contact Web Editor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
