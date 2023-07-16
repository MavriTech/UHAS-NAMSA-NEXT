import "@styles/resourceTopSec.css";
import Image from "next/image";
import Link from "next/link";

const getCardsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default async function CardSection() {
  const cardsData = await getCardsData();
  return (
    <section className="card-section" id="cardSection">
      <div className="level-100" id="level-100">
        <div className="cards-header">
          <div className="tag-container">
            <Image src="/L-images/star.png" width={15} height={15} alt="" />
          </div>
          <span id="100">level-100</span>
        </div>
        <div className="cards-container">
          <div className="divider"></div>
          <div className="cards" id="cards0">
            {cardsData.map((cardData) => (
              <div className="card" key={cardData.id}>
                <div className="img-container">
                  <Image
                    src="/images/general_img/caro1.jpg"
                    className="profile"
                    width={100}
                    height={100}
                    alt="Card Image"
                  />
                  <Image
                    src="/L-images/options.png"
                    width={18}
                    height={18}
                    className="option"
                    alt="option Image"
                  />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <span>
                      <Link href={`/resources/${cardData.id}`}>
                        {cardData.name}
                      </Link>
                    </span>
                  </div>
                  <div className="card-discription">
                    <span>Lecture by {cardData.username}</span>
                    <span>Develop. Create. Educate</span>
                  </div>
                  <div className="progress-bar">
                    <div className="prog1">
                      <span></span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="footer-discrip">
                      <span className="left-dis">NAMSA</span>
                      <span className="right-dis">
                        <Image
                          src="/L-images/star.png"
                          width={12}
                          height={10}
                          alt="star"
                        />
                        <span>2023</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
