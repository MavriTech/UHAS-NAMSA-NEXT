"use client";

import React, { useEffect } from "react";

import "@styles/courses.css";

const CoursesComp = () => {
  useEffect(() => {
    const undergradCourses = document.getElementById("undergradCourses");

    const dataSet = [
      {
        program: "Bsc Nursing",
        level: [
          {
            cLevel: "Level 100",
            levelSpecific: [
              {
                semType: "First Sem",
                semCourseCode: ["NURC 108", "NURC 108"],
                semCourse: [
                  "Professional Adjustment in Nursing",
                  "Professional Adjustment in Nursing",
                ],
              },
              {
                semType: "Second Sem",
                semCourseCode: ["NURC 108", "NURC 108"],
                semCourse: [
                  "Professional Adjustment in Nursing",
                  "Human Anatomy",
                ],
              },
            ],
          },
          {
            cLevel: "Level 200",
            levelSpecific: [
              {
                semType: "First Sem",
                semCourseCode: ["NURC 108", "NURC 108"],
                semCourse: [
                  "Professional Adjustment in Nursing",
                  "Professional Adjustment in Nursing",
                ],
              },
              {
                semType: "Second Sem",
                semCourseCode: ["NURC 108", "NURC 108"],
                semCourse: [
                  "Professional Adjustment in Nursing",
                  "Professional Adjustment in Nursing",
                ],
              },
            ],
          },
          {
            cLevel: "Level 300",
            levelSpecific: [
              {
                semType: "First Sem",
                semCourseCode: ["NURC 108", "NURC 108"],
                semCourse: [
                  "Professional Adjustment in Nursing",
                  "Professional Adjustment in Nursing",
                ],
              },
              {
                semType: "Second Sem",
                semCourseCode: ["NURC 108", "NURC 108"],
                semCourse: [
                  "Professional Adjustment in Nursing",
                  "Professional Adjustment in Nursing",
                ],
              },
            ],
          },
          {
            cLevel: "Level 400",
            levelSpecific: [
              {
                semType: "First Sem",
                semCourseCode: ["NURC 108", "NURC 108"],
                semCourse: [
                  "Professional Adjustment in Nursing",
                  "Professional Adjustment in Nursing",
                ],
              },
              {
                semType: "Second Sem",
                semCourseCode: ["NURC 108", "NURC 108"],
                semCourse: [
                  "Professional Adjustment in Nursing",
                  "Professional Adjustment in Nursing",
                ],
              },
            ],
          },
        ],
      },
    ];

    //console.log(dataSet[0].level[0].levelSpecific[1].semCourse[1]);

    //   console.log(dataSet[0].level[0].cLevel);
    //   console.log(dataSet[0].level[3].level400[0].firstSem[0].course1);

    let undergradHeader = document.createElement("div");
    undergradHeader.className = "undergrad-header";

    let undergradH2 = document.createElement("h2");
    undergradH2.textContent = "Undergraduate Courses";
    undergradHeader.appendChild(undergradH2);

    undergradCourses.appendChild(undergradHeader);

    let programWrapper = document.createElement("div");
    programWrapper.className = "program-wrapper";

    for (let i = 0; i < dataSet.length; i++) {
      let singleProgram = document.createElement("div");
      singleProgram.className = "single-program";

      let programHeader = document.createElement("h2");
      programHeader.className = "program-header";
      programHeader.textContent = dataSet[i].program;
      singleProgram.appendChild(programHeader);

      for (let j = 0; j < dataSet[i].level.length; j++) {
        let level = document.createElement("div");
        level.className = "level";

        var levelHeader = document.createElement("div");
        levelHeader.className = "level-header";
        levelHeader.id = "levelHeader" + j;
        level.appendChild(levelHeader);

        let levelName = document.createElement("div");
        levelName.className = "level100";
        levelName.textContent = dataSet[i].level[j].cLevel;
        levelHeader.appendChild(levelName);

        let arrowdownImg = document.createElement("img");
        arrowdownImg.src = "/L-images/down-arrow.png";
        arrowdownImg.style.width = "25px";
        arrowdownImg.style.height = "25px";
        arrowdownImg.className = "arrowdownImg";
        levelHeader.appendChild(arrowdownImg);

        var bothSem = document.createElement("div");
        bothSem.className = "both-sem";
        bothSem.id = "bothSem" + j;

        for (let k = 0; k < 2; k++) {
          let sem = document.createElement("div");
          sem.className = "sem";

          let firstSemH3 = document.createElement("h3");
          firstSemH3.className = "sem-header";
          firstSemH3.textContent = dataSet[i].level[j].levelSpecific[k].semType;
          sem.appendChild(firstSemH3);

          for (
            let l = 0;
            l < dataSet[i].level[j].levelSpecific[k].semCourse.length;
            l++
          ) {
            let singleCourse = document.createElement("div");
            singleCourse.className = "single-course";

            let courseCode = document.createElement("span");
            courseCode.className = "single-course-code";
            courseCode.textContent =
              dataSet[i].level[j].levelSpecific[k].semCourseCode[l];
            singleCourse.appendChild(courseCode);

            let courseName = document.createElement("span");
            courseName.className = "single-course-name";
            courseName.textContent =
              dataSet[i].level[j].levelSpecific[k].semCourse[l];
            singleCourse.appendChild(courseName);

            sem.appendChild(singleCourse);
          }

          bothSem.appendChild(sem);
        }

        level.appendChild(bothSem);

        singleProgram.appendChild(level);
      }

      programWrapper.appendChild(singleProgram);
    }

    undergradCourses.appendChild(programWrapper);

    return () => {
      undergradCourses.remove();
    };
  }, []);

  return (
    <>
      <section class="courses-offered-wrapper">
        <div class="undergrad-courses" id="undergradCourses"></div>
      </section>
    </>
  );
};

export default CoursesComp;
