"use client";
import React, { useEffect } from "react";
import "@styles/leadership.css";
// import Nav from "@components/Nav";
// import Footer from "@components/Footer";

export const metadata = {
  title: "Executives-NAMSA",
  description: "Nursing and Midwifery Student's Association",
};
const LeadershipPage = () => {
  useEffect(() => {
    // A List of  Executives
    const leaders = [
      {
        name: "Essilfie Prince Bondzie",
        position: "President ",
        imageSource: "/images/executives_img/PRESIDENT.jpg",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus iusto dolore tenetur porro quae nobis expedita commodi optio perferendis et fuga ipsa eaque explicabo ipsum harum quia blanditiis sint, consequatur cum culpa enim tempore eum reprehenderit fugiat. Nulla impedit quibusdam repudiandae? Iste a saepe quisquam suscipit eveniet vitae assumenda fuga! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sint quis corrupti ratione culpa ad quasi, eveniet dolorem odio sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt consectetur quasi autem, omnis ratione similique ea dolorem",
        socials: {
          Facebook: { imgSrc: "/icons/facebook.png", href: "#" },
          Twitter: { imgSrc: "/icons/twitter.png", href: "#" },
          Instagram: { imgSrc: "/images/instagram.webp", href: "#" },
          Linkedin: { imgSrc: "/icons/linkedin.png", href: "#" },
        },
      },
      {
        name: "Essilfie Prince Bondzie",
        position: "Vice President ",
        imageSource: "/images/executives_img/VICE PRESIDENTWELFARE COMMITEE CHAIRPERSON.jpg",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus iusto dolore tenetur porro quae nobis expedita commodi optio perferendis et fuga ipsa eaque explicabo ipsum harum quia blanditiis sint, consequatur cum culpa enim tempore eum reprehenderit fugiat. Nulla impedit quibusdam repudiandae? Iste a saepe quisquam suscipit eveniet vitae assumenda fuga! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sint quis corrupti ratione culpa ad quasi, eveniet dolorem odio sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt consectetur quasi autem, omnis ratione similique ea dolorem",
        socials: {
          Facebook: { imgSrc: "/icons/facebook.png", href: "#" },
          Twitter: { imgSrc: "/icons/twitter.png", href: "#" },
          Instagram: { imgSrc: "/images/instagram.webp", href: "#" },
          Linkedin: { imgSrc: "/icons/linkedin.png", href: "#" },
        },
      },
      {
        name: "Essilfie Prince Bondzie",
        position: "Organizer ",
        imageSource: "/images/executives_img/ORGANIZER.jpg",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus iusto dolore tenetur porro quae nobis expedita commodi optio perferendis et fuga ipsa eaque explicabo ipsum harum quia blanditiis sint, consequatur cum culpa enim tempore eum reprehenderit fugiat. Nulla impedit quibusdam repudiandae? Iste a saepe quisquam suscipit eveniet vitae assumenda fuga! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sint quis corrupti ratione culpa ad quasi, eveniet dolorem odio sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt consectetur quasi autem, omnis ratione similique ea dolorem",
        socials: {
          Facebook: { imgSrc: "/icons/facebook.png", href: "#" },
          Twitter: { imgSrc: "/icons/twitter.png", href: "#" },
          Instagram: { imgSrc: "/images/instagram.webp", href: "#" },
          Linkedin: { imgSrc: "/icons/linkedin.png", href: "#" },
        },
      },
      {
        name: "Essilfie Prince Bondzie",
        position: "General Secretary",
        imageSource: "/images/executives_img/GENERAL SECRETARY.jpg",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus iusto dolore tenetur porro quae nobis expedita commodi optio perferendis et fuga ipsa eaque explicabo ipsum harum quia blanditiis sint, consequatur cum culpa enim tempore eum reprehenderit fugiat. Nulla impedit quibusdam repudiandae? Iste a saepe quisquam suscipit eveniet vitae assumenda fuga! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sint quis corrupti ratione culpa ad quasi, eveniet dolorem odio sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt consectetur quasi autem, omnis ratione similique ea dolorem",
        socials: {
          Facebook: { imgSrc: "/icons/facebook.png", href: "#" },
          Twitter: { imgSrc: "/icons/twitter.png", href: "#" },
          Instagram: { imgSrc: "/images/instagram.webp", href: "#" },
          Linkedin: { imgSrc: "/icons/linkedin.png", href: "#" },
        },
      },
      {
        name: "Essilfie Prince Bondzie",
        position: "General Secretary",
        imageSource: "/images/executives_img/GENERAL SECRETARY.jpg",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus iusto dolore tenetur porro quae nobis expedita commodi optio perferendis et fuga ipsa eaque explicabo ipsum harum quia blanditiis sint, consequatur cum culpa enim tempore eum reprehenderit fugiat. Nulla impedit quibusdam repudiandae? Iste a saepe quisquam suscipit eveniet vitae assumenda fuga! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sint quis corrupti ratione culpa ad quasi, eveniet dolorem odio sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt consectetur quasi autem, omnis ratione similique ea dolorem",
        socials: {
          Facebook: { imgSrc: "/icons/facebook.png", href: "#" },
          Twitter: { imgSrc: "/icons/twitter.png", href: "#" },
          Instagram: { imgSrc: "/images/instagram.webp", href: "#" },
          Linkedin: { imgSrc: "/icons/linkedin.png", href: "#" },
        },
      },
    ];

    function createSocialIconLink(name, href, imgSrc) {
      const iconLink = document.createElement("a");
      iconLink.href = href;
      const iconImage = document.createElement("img");
      iconImage.src = imgSrc;
      iconLink.appendChild(iconImage);
      return iconLink;
    }

    function createExecutiveProfile(leader) {
      const executive = document.createElement("div");
      executive.className = "executive";

      const profileDetails = document.createElement("div");
      profileDetails.className = "profile-details";

      const profileImage = document.createElement("div");
      profileImage.className = "profile-image";
      const image = document.createElement("img");
      image.src = leader.imageSource;
      profileImage.appendChild(image);
      profileDetails.appendChild(profileImage);

      const post = document.createElement("span");
      post.className = "position";
      post.textContent = leader.position;
      profileDetails.appendChild(post);
      executive.appendChild(profileDetails);

      const profileDescription = document.createElement("div");
      profileDescription.className = "profile-description";
      const executiveName = document.createElement("span");
      executiveName.textContent = leader.name;
      profileDescription.appendChild(executiveName);
      const executiveBio = document.createElement("p");
      executiveBio.textContent = leader.bio;
      profileDescription.appendChild(executiveBio);
      executive.appendChild(profileDescription);

      const socials = document.createElement("div");
      socials.className = "executive-social-icons";
      socials.appendChild(
        createSocialIconLink(
          "Facebook",
          leader.socials.Facebook.href,
          leader.socials.Facebook.imgSrc
        )
      );
      socials.appendChild(
        createSocialIconLink(
          "Twitter",
          leader.socials.Twitter.href,
          leader.socials.Twitter.imgSrc
        )
      );
      socials.appendChild(
        createSocialIconLink(
          "Instagram",
          leader.socials.Instagram.href,
          leader.socials.Instagram.imgSrc
        )
      );
      socials.appendChild(
        createSocialIconLink(
          "Linkedin",
          leader.socials.Linkedin.href,
          leader.socials.Linkedin.imgSrc
        )
      );
      profileDetails.appendChild(socials);

      const divider = document.createElement("div");
      divider.className = "divider";
      executive.appendChild(divider);

      const star = document.createElement("div");
      star.className = "star";
      const starImage = document.createElement("img");
      starImage.src = "/icons/Star.png";
      star.appendChild(starImage);
      executive.appendChild(star);

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "Read More";
      executive.appendChild(button);
      return executive;
    }

    const executivesSection = document.querySelector(".executives");

    leaders.forEach((leader) => {
      executivesSection.appendChild(createExecutiveProfile(leader));
    });
  }, []);
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
              <button type="button">Read More</button>
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
              <button type="button">Read More</button>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LeadershipPage;
