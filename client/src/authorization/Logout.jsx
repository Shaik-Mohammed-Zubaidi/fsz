import { connect } from 'react-redux';
import {logoutTheUser} from '../redux/authorization/actionCreator';
const axios= require('axios');

const Logout = ({logoutTheUser,Games,Books,Courses}) =>{

    const handleSignout = async() =>{
        const email= sessionStorage.getItem('email');
        axios.patch('/api/fsz/user',{
            email,
            Games,
            Books,
            Courses,
        }).then(res=>console.log(res)).catch(err=> console.log(err));
        logoutTheUser();
    }

    return (
        <button className="signout-btn" onClick={handleSignout}>Sign Out</button>
    );
};

const mapStateToProps = (state) =>{
    return {
        Games: state.progressReducer.Games,
        Books: state.progressReducer.Books,
        Courses: state.progressReducer.Courses
    }
}

export default connect(mapStateToProps,{
    logoutTheUser,
})(Logout);