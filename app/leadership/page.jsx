import React from "react";
import "@styles/leadership.css";
// import Nav from "@components/Nav";
// import Footer from "@components/Footer";

export const metadata = {
  title: "Executives-NAMSA",
  description: "Nursing and Midwifery Student's Association",
};
const LeadershipPage = () => {
  return (
    <>
      <div className="main-container">
        {/* <Nav /> */}
        <section class="leaders">
          <h1>Our Leaders</h1>
          <div class="executives">
            <div class="executive president">
              <div class="profile-details">
                <div class="profile-image">
                  <img src="/images/caro1.jpg" alt="namsa president" />
                  <div className="profile-image-shadow"></div>
                </div>

                <span class="position"> Presidents of NAMSA </span>
                <div class="executive-social-icons">
                  <a href="#">
                    <img src="/icons/facebook.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/icons/twitter.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/images/instagram.webp" alt="" />
                  </a>
                  <a href="#">
                    <img src="/icons/linkedin.png" alt="" />
                  </a>
                </div>
              </div>

              <div class="profile-description">
                <span>Essilfie Prince Bondzie</span>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus iusto dolore tenetur porro quae nobis expedita
                  commodi optio perferendis et fuga ipsa eaque explicabo ipsum
                  harum quia blanditiis sint, consequatur cum culpa enim tempore
                  eum reprehenderit fugiat. Nulla impedit quibusdam repudiandae?
                  Iste a saepe quisquam suscipit eveniet vitae assumenda fuga!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Atque sint quis corrupti ratione culpa ad quasi, eveniet
                  dolorem odio sequi?Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Deserunt consectetur quasi autem, omnis
                  ratione similique ea dolorem culpa aliquam eius.
                </p>
              </div>
              <div class="divider"></div>
              <div class="star">
                <img src="/icons/Star.png" alt="" />
              </div>
            </div>
            <div class="executive president">
              <div class="profile-details">
                <div class="profile-image">
                  <img
                    src="/images/executives_img/GENERAL SECRETARY.jpg"
                    alt="namsa president"
                  />
                  <div className="profile-image-shadow"></div>
                </div>
                <div class="executive-social-icons">
                  <a href="#">
                    <img src="/icons/facebook.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/icons/twitter.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/images/instagram.webp" alt="" />
                  </a>
                  <a href="#">
                    <img src="/icons/linkedin.png" alt="" />
                  </a>
                </div>
                <span class="position"> Presidents of NAMSA </span>
              </div>

              <div class="profile-description">
                <span>Essilfie Prince Bondzie</span>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus iusto dolore tenetur porro quae nobis expedita
                  commodi optio perferendis et fuga ipsa eaque explicabo ipsum
                  harum quia blanditiis sint, consequatur cum culpa enim tempore
                  eum reprehenderit fugiat. Nulla impedit quibusdam repudiandae?
                  Iste a saepe quisquam suscipit eveniet vitae assumenda fuga!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Atque sint quis corrupti ratione culpa ad quasi, eveniet
                  dolorem odio sequi?Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Deserunt consectetur quasi autem, omnis
                  ratione similique ea dolorem culpa aliquam eius.
                </p>
              </div>
              <div class="divider"></div>
              <div class="star">
                <img src="/icons/Star.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LeadershipPage;
