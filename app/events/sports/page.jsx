import React from "react";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import "@styles/sports.css";

export const metadata = {
    title: "Sporst-Events",
    description: "Nursing and Midwifery Student's Association",
  };

export default function Sports() {
  return (
    <>
      <div classNameName="main-container">
        <Nav />
        {/* Image Slider Section Begins */}
      <div className="slider-wrapper">
        <div className="slider-shadow"></div>
        <div className="slider">
          {/* slider radio buttons begin */}
          <input type="radio" name="radio-btn" id="radio1" checked />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          {/* slider radio buttons ends */}

          {/* slider images begin */}
          <div className="slide first">
            <div className="slide-image">
              <img src="/images/sportimage1.png" alt="basketball players" />
            </div>
            <div className="slide-description">
              <div className="circle"></div>
              <span> Trainees on basketball court </span>
            </div>
          </div>

          <div className="slide">
            <div className="slide-image">
              <img
                src="/images/sportimage4.jpg"
                alt="a group of volleyball players"
              />
            </div>
            <div className="slide-description">
              <div className="circle"></div>
              <span> beachball is ongoing </span>
            </div>
          </div>

          <div className="slide">
            <div className="slide-image">
              <img src="/images/sportimage2.png" alt="namsa playing rugby" />
            </div>
            <div className="slide-description">
              <div className="circle"></div>
              <span> Rugby players on it again </span>
            </div>
          </div>
          <div className="slide">
            <div className="slide-image">
              <img
                src="/images/sportimage3.png"
                alt="Namsa members on hiking"
              />
            </div>
            <div className="slide-description">
              <div className="circle"></div>
              <span> NAMSA on hiking </span>
            </div>
          </div>

          {/* slider images end */}

          {/* automatic navigation begins */}
          <div className="auto-nav">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
          {/* automatic navigation ends */}

          {/* manual navigation begins */}
          <div className="manual-nav">
            <label for="radio1" className="man-btn"></label>
            <label for="radio2" className="man-btn"></label>
            <label for="radio3" className="man-btn"></label>
            <label for="radio4" className="man-btn"></label>
          </div>
          {/* manual navigation begins */}
        </div>
      </div>
      {/* Image Slider Section Ends */}

      {/* pagecontent section begins */}
      <div className="page-container">
        <div className="content">
          <div className="title">
            <h2>Why sports?</h2>
            <hr />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            animi necessitatibus error, tenetur eaque enim suscipit veritatis
            neque obcaecati consequuntur praesentium magni possimus dolorum
            repellendus assumenda similique? Maiores, illo quam, quaerat
            excepturi nihil assumenda cumque nisi consequuntur quis corporis
            quidem itaque voluptatum officiis laboriosam. Itaque voluptates
            voluptas ad nam nemo. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Odit ratione voluptate molestias nesciunt, hic
            voluptas repudiandae? Deleniti dolor neque iure.
          </p>
        </div>

        <div className="content">
          <div className="title">
            <h2>Sports Achievements</h2>
            <hr />
          </div>

          <div className="achievements">
            <ul>
              <li className="achievement">Multiple league chamepoinship titles.</li>
              <li className="achievement">Regional tournament victories.</li>
              <li className="achievement">
                Promotion to higher divisions or levels of competition.
              </li>
              <li className="achievement">
                Collaboration with schools or educational institutions.
              </li>
              <li className="achievement">
                Friendly Matches with other student groups and associations.
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="title">
            <h2>Sports in NAMSA</h2>
            <hr />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            animi necessitatibus error, tenetur eaque enim suscipit veritatis
            neque obcaecati consequuntur praesentium magni possimus dolorum
            repellendus assumenda similique? Maiores, illo quam, quaerat
            excepturi nihil assumenda cumque nisi consequuntur quis corporis
            quidem itaque voluptatum officiis laboriosam. Itaque voluptates
            voluptas ad nam nemo. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Odit ratione voluptate molestias nesciunt, hic
            voluptas repudiandae? Deleniti dolor neque iure. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. In minus unde iste temporibus
            dolore libero adipisci quo ratione perspiciatis eligendi enim
            cupiditate a recusandae nisi possimus dolores veritatis, nostrum
            consectetur, ipsam quisquam molestias qui suscipit accusamus? Magni,
            sit facere unde deserunt numquam, harum delectus aut officia,
            dolorem exercitationem libero tempore! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Provident nesciunt quos nam, eos
            aliquid accusamus molestias eius tempore alias. A voluptatum ipsa
            hic magnam praesentium excepturi? Quis vitae sapiente excepturi iure
            unde obcaecati adipisci eligendi debitis mollitia, aliquid fugit
            natus. Magnam deserunt sint sit, fugiat minima consequatur iusto
            molestias ipsam!
          </p>
        </div>

        <div className="content">
          <div className="title">
            <h2>Games Engaged</h2>
            <hr />
          </div>

          <div className="achievements">
            <ul>
              <li className="achievement">
                Friendly Matches with other student groups and associations
              </li>
              <li className="achievement">Regional tournament victories.</li>
              <li className="achievement">Annual Sports Events or Sports Days.</li>
              <li className="achievement">
                Sports Challenges organized by external Organizations.
              </li>
              <li className="achievement">Track and field competitions</li>
              <li className="achievement">Annual Sports Events or Sports Days.</li>
              <li className="achievement">Track and field competitions</li>
              <li className="achievement">
                Sports Challenges organized by external Organizations.
              </li>
              <li className="achievement">
                Friendly Matches with other student groups and associations
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="title">
            <h2>Sports Achievements</h2>
            <hr />
          </div>

          <div className="achievements">
            <ul>
              <li className="achievement">Multiple league chamepoinship titles.</li>
              <li className="achievement">Regional tournament victories.</li>
              <li className="achievement">
                Promotion to higher divisions or levels of competition.
              </li>
              <li className="achievement">
                Collaboration with schools or educational institutions.
              </li>
              <li className="achievement">
                Friendly Matches with other student groups and associations.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* pagecontent section ends */}

        <Footer />
      </div>
    </>
  );
}
