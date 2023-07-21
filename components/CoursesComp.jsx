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
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Professional Adjustment in Nursing",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Basic Nursing I",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Introduction to Psychology",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Introduction to Community Health Nursing",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Chemistry",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Human Anatomy I",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Physiology I",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Information Literacy",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Academic Communicative Skills I",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Introduction to Sociology",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "First Aid and Disaster Management",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Basic Nursing II",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum I",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Human Anatomy II",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Physiology II",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Physics",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Quantitative Literacy",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Academic and Communicative Skills II",
              },
              {
                id: 10,
                code: "NURC 108",
                course: "Introduction to Ghanaian and African Studies",
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
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practimum II",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Medical Nursing I",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Surgical Nursing I",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Advanced Nursing I",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Psychology of Human Growth and Development",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Mental Health Nursing I",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Nutrition and Dietetics",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Pharmacology, Therapeutics and Pharmacovigilance I",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Microbiology", 
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Medical Nursing II",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Surgical Nursing II",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Advanced Nursing II",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Principles and Practice of Health Assessment",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum III",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Mental Health Nursing II",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Pharmacology, Therapeutics and Pharmacovigilance II",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "General Pathology",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Biochemistry",

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
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum IV",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Medical Nursing III",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Surgical Nursing III",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Health Law and Nursing Ethics",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Nursing Research Methods",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Gynaecology and Reproductive Tract Infections",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Therapeutic Communication",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Biostatistics",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Nursing Theories",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Pediatric Nursing I",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Obstetric Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Sign Language",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum V",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Introduction to Critical and Emergency Care Nursing",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Health Promotion",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Health Supply Chain Management",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Prevention and Control of Communicable Diseases",
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
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum VI",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Pediatric Nursing II",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Nursing Informatics",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Relationship Marketing and Entrepreneurship",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Introduction to Palliative Care",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Healthcare Policy and Planning",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Adolescent Health and Development",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Public Health Nursing",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Functional French",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Principles of Management and Nursing Administration",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Nursing Seminar",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum VII",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Gerontology and Home Based Nursing",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Occupational Health Nursing",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Traditional and Alternative Medicine",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Project Work",
                
                
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    program: "Bsc Midwifery",
    levels: [
      {
        id: 1,
        cLevel: "Level 100",
        levelSpecifics: [
          {
            id: 1,
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Basic Nursing I",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Introduction to Psychology",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Professional Adjustment in Midwifery",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Introduction to Community Health Nursing",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Chemistry",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Human Anatomy I",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Physiology I",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Information Literacy",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Academic and Communicative Skills",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Introduction to Sociology",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "First Aid and Disaster Management",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Basic Nursing II",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum I",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Human Anatomy II",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Physiology II",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Physics",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Quantitative Literacy",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Academic and Communicative Skills II",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Introduction to Ghanaian and African Studies",

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
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum II",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Psychology of Human Growth and Development",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Mental Health Nursing I",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Pharmacology, Therapeutics and Pharmacovigilance I",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Antepartum Care I",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Anatomy and Physiology of Human Reproductive System and Foetus I",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Medical Nursing for Midwives I",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Surgical Nursing for Midwives I",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Microbiology",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Principles and Practice of Health Assessment",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Intra-Semester Clinical  Practicum III",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Mental Health Nursing II",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Pharmacology,Therapeutics and Pharmacovigilance II",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Anatomy and Physiology of Human Reproductive System and Foetus II",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Antepartum Care I",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Medical Nursing for Midwives II",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Surgical Nursing for Midwives II",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Advanced Nursing",
              },
              {
                id: 10,
                code: "NURC 108",
                course: "General Pathology",
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
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Nursing Research Methods",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Therapeutic Communication",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Intra-Semester Midwifery Practicum I",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Antepartum Care II",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Neonatal Nursing I",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Gynaecology and Reproductive Tract Infections",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Intrapartum Care II",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Health Law and Nursing/Midwifery Ethics",
              },
              {
                id: 10,
                code: "NURC 108",
                course: "Biostatistics",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Sign Language",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Domiciliary Midwifery",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Neonatal Nursing II",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Obstetrics Pharmoco-therapeutics",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Post Partum Care",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Intra-Semester Midwifery Practimum II",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Reproductive Health",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Nursing and Midwifery Theories",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Health Supply Chain Management",
              },
              {
                id: 10,
                code: "NURC 108",
                course: "Prevention and Control of Communicable Diseases",
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
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Nursing Informatics",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Relationship Marketing and Entrepreneurship",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Introduction to Palliative Care",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Intra-Semester Midwifery Practicum III",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Pediatric Nursing",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Obstetrics-Gynaecological Surgery, and Anaesthesia",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Health Care Policy and Planning",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Adolescent Health Promotion",
                
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Public Health Nursing",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Functional French",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Principles of Management and Nursing Administration",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Nursing Seminar",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Maternal and Neonatal Audit",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Intra-Semester Midwifery Practicum IV",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Occupational Health Nursing",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Project Work",
             
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    program: "Bsc Public Health Nursing",
    levels: [
      {
        id: 1,
        cLevel: "Level 100",
        levelSpecifics: [
          {
            id: 1,
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Introduction to Psychology",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Basic Nursing I",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Introduction to Community Health Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Chemistry",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Professional Adjustment in Public Health Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Human Anatomy I",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Physiology I",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Information Literacy",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Academic and Communicative Skills I",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Basic Nursing II",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "First Aid and Disaster Management",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Introduction to Sociology",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Human Anatomy II",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Physiology II",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Physics",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Quantitative Literacy",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Introduction to Ghanaian and African Studies",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Academic and Communicative Skills II",
              },
              {
                id: 10,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum I",
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
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Anatomy and Physiology of the Human Reproductive System and Foetus I",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Mental Health Nursing I",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Pharmacology, Therapeutics and Pharmacovigilance I",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Psychology of Human Growth and Development",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Microbiology",              },
              {
                id: 6,
                code: "NURC 108",
                course: "Medical Nursing for Public Health Nurses",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Surgical Nursing for Public Health Nurses",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Nutrition and Dietetics",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Advanced Nursing for Public Health Nurses",
              },
              {
                id: 10,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum II",
                

                
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Anatomy and Physiology of the Human Reproductive System and Foetus II",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Mental Health Nursing II",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Pharmacology, Therapeutics and Pharmacovigilance",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Principles and Practice of Community Health Nursing Management and Administration I",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Principles of Disease Management and Control I",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "General Pathology",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Medical Nursing for Public Health Nurses II",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Surgical Nursing for Public Health Nurses II",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Principles and Practice of Health Assessment",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum III",
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
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Principles Practice of Community Health Nursing Management and Administration II",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Health Law and Nursing Ethics",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Therapeutic Communication",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Maternal Health Nursing I",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Principles of Disease Management and Control II",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Nursing Research Methods",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Biostatistics",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum IV(CWC &ANC)",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Nursing Theories",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Health Supply Chain Management",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Principles of Disease Management and Control III",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Maternal Health Nursing II",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Educational and Industrial Health",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Health Promotion",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Family Planning",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practimum V (FP, HP & HV)",
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
            semTypes: "First Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Public Health Nursing Informatics",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Relationship Marketing and Entrepreneurship",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Community-Based Rehabilitation",
              },
              {
                id: 5,
                code: "NURC 108",
                course: "Healthcare Policy and Planning ",
              },
              {
                id: 6,
                code: "NURC 108",
                course: "Adolescent Reproductive Health and Development",
              },
              {
                id: 7,
                code: "NURC 108",
                course: "Principles and Practice of Community Health Nursing Management and Administration III",
              },
              {
                id: 8,
                code: "NURC 108",
                course: "Functional French",
              },
              {
                id: 9,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum VI (Family Centered Care Study)",
              },
            ],
          },
          {
            id: 2,
            semTypes: "Second Semester",
            semCourseCodes: [
              {
                id: 1,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum VI (Family Centered Care Study)",
              },
              {
                id: 2,
                code: "NURC 108",
                course: "Primary Eye Care, Oral Health & Ear, Nose and Throat (ENT) Nursing",
              },
              {
                id: 3,
                code: "NURC 108",
                course: "Gerontology and Home-Based Nursing",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Traditional and Alternate Medicine",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Sign Language",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Intra-Semester Clinical Practicum VII (Family Centered Care Study)",
              },
              {
                id: 4,
                code: "NURC 108",
                course: "Project Work",
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
