import React from "react";
function Course({ course }) {
  const { id, title, description, price, link, image } = course;
  return (
    <div className="course">
      <img src={image} alt="" width={220} height={150} />
      <h3>{title}</h3>
      <h4>{description}</h4>
      <div>
        <a className="course_link" href={link}>
          buy
        </a>
      </div>
    </div>
  );
}

export default Course;
