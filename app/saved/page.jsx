"use client";
import { useState, useEffect } from "react";
import CoursePreview from "@/components/Courses/Course/CoursePreview";
import MyLearningCourses from "@/components/Courses/MyLearning/MyLearningCourses";

import styles from "../courses/coursePage.module.css";
import { fetchSavedCourses } from "@/components/Fetching/fetching";

const Courses = (props) => {
  const [savedCourses, setSavedCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await fetchSavedCourses();
      setSavedCourses(courses);
    };

    fetchCourses();
  }, []);

  return (
    <main
      className={`home-container grid-2 ${styles["home-container__courses"]}`}
    >
      <MyLearningCourses
        header={"Saved Courses"}
        courses={savedCourses}
        isButton={true}
      />
      <CoursePreview review={"PREVIEW"} action={"BUY NOW"} />
    </main>
  );
};

export default Courses;
