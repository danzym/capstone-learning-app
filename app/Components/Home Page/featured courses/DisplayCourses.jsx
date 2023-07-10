import CourseElement from "./CourseElement";

const DisplayCourses = (props) => {
  return props.AllCourses.map((course) => {
    return (
      <CourseElement
        name={course.name}
        image={course.image}
        duration={course.duration}
        rate={course.rate}
        price={course.price}
      ></CourseElement>
    );
  });
};

export default DisplayCourses;