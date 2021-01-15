import { useState } from "react";
import { connect } from "react-redux";
import {incrementCourses,decrementCourses} from '../../redux/progress/actionCreator';

const Course = (props) =>{
    const {course,incrementCourses,decrementCourses}= props;
    const {title,description,video}= course;
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () =>{
        if(isCompleted){
            decrementCourses();
        }
        else{
            incrementCourses();
        }
        setIsCompleted(prevState => !prevState);
    }

    return (
        <div className="course">
            <button className="completed" onClick={handleComplete}>{isCompleted? "Completed" : "Not Completed" }</button>
            <h3>{title}</h3>
            <p>{description}</p>
            {video}
        </div>
    );
};
export default connect(null,{
    incrementCourses,
    decrementCourses
})(Course);