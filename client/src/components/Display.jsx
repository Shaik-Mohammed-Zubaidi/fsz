import { connect } from "react-redux";
import Home from "./Home";

const Display = ({isLoggedIn}) =>{
    return (
        <>
            {isLoggedIn? <Home /> : null}
        </>
    )
};


const mapStateToProps = (state) =>{
    return {
        isLoggedIn: state
    }
}

export default connect(mapStateToProps,null)(Display);