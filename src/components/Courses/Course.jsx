const Course = (props) =>{
    const {course,markCompleted}= props;
    const {title,description,video}= course;
    return (
        <div className="course">
            <button className="completed" onClick={()=>markCompleted("Courses")}>Completed</button>
            <h3>{title}</h3>
            <p>{description}</p>
            {video}
        </div>
    );
};

export default Course;