import axios from 'axios';
import { useEffect, useState } from 'react';
import AddItem from '../../common/AddItem';
import Course from './Course';
import './courses.css';

const Courses = () =>{
    const login = JSON.parse(window.sessionStorage.getItem('login'));
    const [coursesList, setCoursesList] = useState([]);

    useEffect(()=>{
      axios.get('fsz/api/admin/courses')
        .then(response=> {
          console.log(response);
          setCoursesList(response.data);
        })
        .catch(({response})=> console.log(response.data));
    },[]);

    return (
        <div>
            {login && login.user.admin && <AddItem category={"Course"} />}
            {coursesList.map((course,i)=><Course key={course.title+i} name={course.title} course={course} />)}
        </div>
    );
};

export default Courses;