import { useState } from "react";
import { connect } from "react-redux";
import {addCourse,removeCourse} from '../../redux/progress/actionCreator';

const Course = (props) =>{
    const {course,addCourse,removeCourse,id}= props;
    const {title,description,video}= course;
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () =>{
        if(isCompleted){
            removeCourse(id);
        }
        else{
            addCourse({id,title});
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
    addCourse,
    removeCourse
})(Course);