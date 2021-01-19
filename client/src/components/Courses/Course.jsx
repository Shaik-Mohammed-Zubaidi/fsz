import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {addCourse,removeCourse} from '../../redux/progress/actionCreator';

const Course = (props) =>{
    const {course, addCourse, removeCourse, name, courses}= props;
    const {title, description, link}= course;
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () =>{
        if(isCompleted){
            removeCourse(name);
        }
        else{
            addCourse({title});
        }
        setIsCompleted(prevState => !prevState);
    }

    useEffect(()=>{
        courses.forEach(course=>{
            if(course.title===name){
                setIsCompleted(true);
            }
        });
    },[]);

    return (
        <div className="course">
            <button className="completed" onClick={handleComplete}>{isCompleted? "Completed" : "Not Completed" }</button>
            <h3>{title}</h3>
            <p>{description}</p>
            <iframe width="80%" height="60%" title="redux tutorial" src={link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        courses: state.progressReducer.courses
    }
}

export default connect(mapStateToProps,{
    addCourse,
    removeCourse
})(Course);