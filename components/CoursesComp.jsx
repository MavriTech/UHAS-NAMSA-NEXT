"use client";

import React, { useEffect, useState } from "react";

import "@styles/courses.css";

const dataSet = [
  {
    id: 1,
    program: "Bsc Nursing",
    levels: [
      {
        id: 1,
        cLevel: "Level 100",
        levelSpecifics: [
          {
            id: 1,
            semTypes: "First Sem",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Sem",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        cLevel: "Level 200",
        levelSpecifics: [
          {
            id: 1,
            semTypes: "First Sem",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Sem",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        cLevel: "Level 300",
        levelSpecifics: [
          {
            id: 1,
            semTypes: "First Sem",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Sem",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        cLevel: "Level 400",
        levelSpecifics: [
          {
            id: 1,
            semTypes: "First Sem",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Sem",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
            ],
          },
        ],
      },
    ],
  },
];

const CoursesComp = () => {
  const [visibleStates, setVisibleStates] = useState({});

  const visibleHandler = (index) => {
    setVisibleStates((prevVisibleStates) => ({
      ...prevVisibleStates,
      [index]: !prevVisibleStates[index],
    }));
  };

  return (
    <>
      <section className="courses-offered-wrapper">
        <div className="program-wrapper">
          {dataSet.map((data, programIndex) => (
            <div className="single-program" key={data.id}>
              <h2 className="program-header">{data.program}</h2>
              {data.levels.map((level, levelIndex) => (
                <div className="level" key={level.id}>
                  <div
                    onClick={() =>
                      visibleHandler(programIndex + "-" + levelIndex)
                    }
                    className="level-header"
                  >
                    <div className="level100">{level.cLevel}</div>
                    <img
                      src="/L-images/down-arrow.png"
                      width="25px"
                      height="25px"
                      className="arrowdownImg"
                      alt=""
                    />
                  </div>
                  {visibleStates[programIndex + "-" + levelIndex] && (
                    <div
                      className="both-sem"
                      id={`bothSem${programIndex}-${levelIndex}`}
                    >
                      {level.levelSpecifics.map((levelSpecific) => (
                        <div className="sem" key={levelSpecific.id}>
                          <h3 className="sem-header">
                            {levelSpecific.semTypes}
                          </h3>
                          {levelSpecific.semCourseCodes.map((semCourseCode) => (
                            <div
                              className="single-course"
                              key={semCourseCode.id}
                            >
                              <span className="single-course-code">
                                {semCourseCode.code}
                              </span>
                              <span className="single-course-name">
                                {semCourseCode.course}
                              </span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesComp;
