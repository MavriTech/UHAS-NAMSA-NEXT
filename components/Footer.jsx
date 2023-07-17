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
                  <a href="https://www.uhas.edu.gh/en/" target ='_blank'>UHASS University</a>
                </li>
                <li>
                  <a href="https://www.uhas.edu.gh/en/about-us/strategic-objectives.html" target ='_blank'>Strategic Objectives</a>
                </li>
                <li>
                  <a href="https://www.uhas.edu.gh/en/admissions/cut-off-points-2022.html" target ='_blank'>Courses</a>
                </li>
                <li>
                  <a href="https://www.uhas.edu.gh/en/admissions/fees.html" target ='_blank'>Fees and findings</a>
                </li>
                <li>
                  <a href="https://www.uhas.edu.gh/en/admissions/how-to-apply.html" target = '_blank'>How to apply</a>
                </li>
                <li>
                  <a href="https://library.uhas.edu.gh/" target="_blank">Library</a>
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
                  <a href="https://www.uhas.edu.gh/en/students/grasag.html" target="_blank">Porspective Graduates</a>
                </li>
                <li>
                  <a href="#">Porspective Online/Distance Students</a>
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
