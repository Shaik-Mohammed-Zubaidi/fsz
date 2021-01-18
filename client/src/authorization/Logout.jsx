import axios from 'axios';

const Logout = () =>{

    const handleSignout = async() =>{

        axios.patch('/api/fsz/user',{email: "yaya"}).then(res=>console.log(res)).catch(err=> console.log(err));
        
        window.sessionStorage.clear();
        window.location.reload();
    }

    return (
        <button className="signout-btn" onClick={handleSignout}>Sign Out</button>
    );
};

export default Logout;