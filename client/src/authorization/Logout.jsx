import axios from 'axios';
import { connect } from 'react-redux';

const Logout = ({games,books,courses}) =>{

    const handleSignout = async() =>{
        const login = JSON.parse(window.sessionStorage.getItem('login'));
        console.log(login.user.id);
        
        console.log(games,books,courses);
        axios.patch('/fsz/api/users/update',{
            id: login.user.id,
            games,
            books,
            courses,
        }).then(res=>console.log(res)).catch(err=> console.log(err));
        
        console.log("after patch");
        window.sessionStorage.clear();
        window.location.reload();
    }

    return (
        <button className="signout-btn" onClick={handleSignout}>Sign Out</button>
    );
};

const mapStateToProps = (state) =>{
    return {
        games: state.progressReducer.games,
        books: state.progressReducer.books,
        courses: state.progressReducer.courses,
    }
}

export default connect(mapStateToProps,null)(Logout);