"use client";

import "@styles/resourceTopSec.css";
import React, { useEffect } from "react";

const CardSection = () => {
  useEffect(() => {
    const cardSection = document.getElementById("cardSection");

    let id = 100;

    for (let c = 0; c < 4; c++) {
      let level = document.createElement("div");
      level.className = "level-100";
      level.id = "level-" + id;

      let cardsHeader = document.createElement("div");
      cardsHeader.className = "cards-header";
      level.appendChild(cardsHeader);

      let tagCont = document.createElement("div");
      tagCont.className = "tag-container";
      cardsHeader.appendChild(tagCont);

      let tagImg = document.createElement("img");
      tagImg.src = "/L-images/star.png";
      tagImg.style.width = "15px";
      tagImg.style.height = "15px";
      tagCont.appendChild(tagImg);

      let tagSpan = document.createElement("span");
      tagSpan.textContent = "level-" + id;
      cardsHeader.appendChild(tagSpan);

      let cardsContainer = document.createElement("div");
      cardsContainer.className = "cards-container";
      level.appendChild(cardsContainer);

      let divider = document.createElement("div");
      divider.className = "divider";
      cardsContainer.appendChild(divider);

      var cardss = document.createElement("div");
      cardss.className = "cards";
      cardss.id = "cards" + c;
      cardsContainer.appendChild(cardss);

      id += 100;

      cardSection.appendChild(level);
    }

    const cards0 = document.getElementById("cards0");
    const cards1 = document.getElementById("cards1");
    const cards2 = document.getElementById("cards2");
    const cards3 = document.getElementById("cards3");

    const cardsDisplay = (cardDataset, cardId) => {
      // scripts for cards rendering
      for (let i = 0; i < cardDataset.length; i++) {
        // create a new card element
        let card = document.createElement("div");
        card.className = "card";

        // creating card content
        let imgContainer = document.createElement("div");
        imgContainer.className = "img-container";
        card.appendChild(imgContainer);

        let cardImage = document.createElement("img");
        cardImage.className = "profile";
        cardImage.src = cardDataset[i].imageUrl;
        cardImage.alt = "Card Image";
        imgContainer.appendChild(cardImage);

        let optionImage = document.createElement("img");
        optionImage.className = "option";
        optionImage.src = "../L-images/options.png";
        optionImage.alt = "option Image";
        imgContainer.appendChild(optionImage);

        // card body
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);

        let cardTitle = document.createElement("div");
        cardTitle.className = "card-title";
        cardBody.appendChild(cardTitle);

        let titleSpan = document.createElement("span");
        cardTitle.appendChild(titleSpan);

        let titleA = document.createElement("a");
        titleA.href = "#";
        titleA.textContent = cardDataset[i].courseTitle;
        titleSpan.appendChild(titleA);

        let cardDescription = document.createElement("div");
        cardDescription.className = "card-discription";
        cardBody.appendChild(cardDescription);

        let descriptSpan = document.createElement("span");
        descriptSpan.textContent = "Lecture by " + cardDataset[i].lecturer;
        cardDescription.appendChild(descriptSpan);

        let descriptSpan2 = document.createElement("span");
        descriptSpan2.textContent = "Develop. Create. Educate";
        cardDescription.appendChild(descriptSpan2);

        let progressBar = document.createElement("div");
        progressBar.className = "progress-bar";
        cardBody.appendChild(progressBar);

        let prog1 = document.createElement("div");
        prog1.className = "prog1";
        progressBar.appendChild(prog1);

        let progSpan = document.createElement("span");
        prog1.appendChild(progSpan);

        let cardFooter = document.createElement("div");
        cardFooter.className = "card-footer";
        cardBody.appendChild(cardFooter);

        let footerDescrip = document.createElement("div");
        footerDescrip.className = "footer-discrip";
        cardFooter.appendChild(footerDescrip);

        let leftDis = document.createElement("span");
        leftDis.className = "left-dis";
        leftDis.textContent = "NAMSA";
        footerDescrip.appendChild(leftDis);

        let rightDis = document.createElement("span");
        rightDis.className = "right-dis";
        footerDescrip.appendChild(rightDis);

        let starImg = document.createElement("img");
        starImg.src = "../L-images/star.png";
        rightDis.appendChild(starImg);

        let rightSpan = document.createElement("span");
        rightSpan.textContent = "2023";
        rightDis.appendChild(rightSpan);

        cardId.appendChild(card);
      }
    };

    cardsDisplay(
      [
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_q83uTLIoKbIKNf8szG7X7_FYZR3Fc3QejRBioRn8--_ZnhteueM-B5ZCBgYz33bJbQ&usqp=CAU",
          courseTitle: "Professional Adjustment in Nursing",
          lecturer: "Dr. Mwanwien",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CmRKIfI8jWb6M3iDz744ECBP2rERQIJTyA&usqp=CAU",
          courseTitle: "Basic Nursing I",
          lecturer: "Dr. Comfort",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkWZ4GvTT-NmbkZ9czo9Gf0mL8HHf6J7UXw&usqp=CAU",
          courseTitle: "Introduction to Psychology",
          lecturer: " Mr. John",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjc_BViTbnJiaKb8YWPP9816rkUIlm672eQ&usqp=CAU",
          courseTitle: "Introduction to community Health Nursing",
          lecturer: " Dr. Judith",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuf3msLM0VQs82l6WhCzwAgk-2RR3_hykSA&usqp=CAU",
          courseTitle: "Chemistry",
          lecturer: "Dr. Justice",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswA0VS-W6doTmwcJZ6_y1kLozrp4EQXya6A&usqp=CAU",
          courseTitle: "Human Anatomy I",
          lecturer: " Mr. Kingsley",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33HR3IuEKAaMFLryXCMK8-IfyUhNvsuSngA&usqp=CAU",
          courseTitle: "Physiology I",
          lecturer: "Dr. O. Tetteh",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxUcvlkwewRpRtyR2YbVXWtEHq3OVfk300A&usqp=CAU",
          courseTitle: "Information Literacy",
          lecturer: "Dr. Default",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-c7495u-An7IQbyRDkZ_Hum46EvS6UyvhA&usqp=CAU",
          courseTitle: "Academic and Communicative Skills I",
          lecturer: "Dr. Glover",
        },
      ],
      cards0
    );

    cardsDisplay(
      [
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzsFosTnR-bVQ_rIGAhy84Ukx-ittTjiqaQ&usqp=CAU",
          courseTitle: "Introduction To Human Anatomy",
          lecturer: "Kwame",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IUmO9LvpjzbPWU4g1kfIMGPD8KmqmRmvSw&usqp=CA",
          courseTitle: "Physiology 2",
          lecturer: "Aziz",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IUmO9LvpjzbPWU4g1kfIMGPD8KmqmRmvSw&usqp=CA",
          courseTitle: "Introduction To Human Anatomy",
          lecturer: " Mwanwien",
        },
      ],
      cards1
    );

    cardsDisplay(
      [
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJFsVD5vi9D3EfST8DQV0SVpzuWdRICW6QQ&usqp=CAU",
          courseTitle: "Introduction To Human Anatomy",
          lecturer: " Kwame",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHmdvxHgttQE792lH7HJ1m5KMIgBUrAdBqFw&usqp=CAU",
          courseTitle: "Physiology 2",
          lecturer: "Aziz",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDZkl5DokFZ3s-5pv3BrTPVNCFrFtUvDJrg&usqp=CAU",
          courseTitle: "Introduction To Human Anatomy",
          lecturer: "Mwanwien",
        },
      ],
      cards2
    );

    cardsDisplay(
      [
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrqN28A506NxaoOFRcMNER2Gwn7PP632wVQ&usqp=CAU",
          courseTitle: "Introduction To Human Anatomy",
          lecturer: "Kwame",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzsFosTnR-bVQ_rIGAhy84Ukx-ittTjiqaQ&usqp=CAU",
          courseTitle: "Physiology 2",
          lecturer: "Aziz",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnH2nm7745cgUQxRWEtMRal8XG45H8pG9HXw&usqp=CAU",
          courseTitle: "Introduction To Human Anatomy",
          lecturer: "Mwanwien",
        },
      ],
      cards3
    );

    return () => {
      cardSection.remove();
    };
  }, []);

  return null; //<section class="card-section" id="cardSection"></section>;
};

export default CardSection;
