import Course from './Course';
import './courses.css';

const Courses = () =>{
    const coursesList = [
        {
          title: "Redux Tutorial",
          description:
            "Redux For Beginners | React Redux Tutorial by  Dev Ed",
          video: <iframe width="80%" height="60%" title="redux tutorial" src="https://www.youtube.com/embed/CVpUuw9XSjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        },
        {
          title: "Redux Tutorial",
          description:
            "Redux For Beginners | React Redux Tutorial by  Dev Ed",
          video: <iframe width="80%" height="60%" title="redux tutorial" src="https://www.youtube.com/embed/CVpUuw9XSjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        },
        {
          title: "Redux Tutorial",
          description:
            "Redux For Beginners | React Redux Tutorial by  Dev Ed",
          video: <iframe width="80%" height="60%" title="redux tutorial" src="https://www.youtube.com/embed/CVpUuw9XSjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        },
        {
          title: "Redux Tutorial",
          description:
            "Redux For Beginners | React Redux Tutorial by  Dev Ed",
          video: <iframe width="80%" height="60%" title="redux tutorial" src="https://www.youtube.com/embed/CVpUuw9XSjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        },
        {
          title: "Redux Tutorial",
          description:
            "Redux For Beginners | React Redux Tutorial by  Dev Ed",
          video: <iframe width="80%" height="60%" title="redux tutorial" src="https://www.youtube.com/embed/CVpUuw9XSjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        },
        {
          title: "Redux Tutorial",
          description:
            "Redux For Beginners | React Redux Tutorial by  Dev Ed",
          video: <iframe width="80%" height="60%" title="redux tutorial" src="https://www.youtube.com/embed/CVpUuw9XSjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        },
        {
          title: "Redux Tutorial",
          description:
            "Redux For Beginners | React Redux Tutorial by  Dev Ed",
          video: <iframe width="80%" height="60%" title="redux tutorial" src="https://www.youtube.com/embed/CVpUuw9XSjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        },
        {
          title: "Redux Tutorial",
          description:
            "Redux For Beginners | React Redux Tutorial by  Dev Ed",
          video: <iframe width="80%" height="60%" title="redux tutorial" src="https://www.youtube.com/embed/CVpUuw9XSjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        },
        {
          title: "Redux Tutorial",
          description:
            "Redux For Beginners | React Redux Tutorial by  Dev Ed",
          video: <iframe width="80%" height="60%" title="redux tutorial" src="https://www.youtube.com/embed/CVpUuw9XSjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        },
        {
          title: "Redux Tutorial",
          description:
            "Redux For Beginners | React Redux Tutorial by  Dev Ed",
          video: <iframe width="80%" height="60%" title="redux tutorial" src="https://www.youtube.com/embed/CVpUuw9XSjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        },];
    return (
        <div>
            {coursesList.map((course,i)=><Course key={course.title+i} course={course} />)}
        </div>
    );
};

export default Courses;