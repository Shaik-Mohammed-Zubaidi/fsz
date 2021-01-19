export default function Header(){
    const login = JSON.parse(window.sessionStorage.getItem('login'));
    return (
        <div style={{backgroundColor: "turquoise",padding: "1% 0 1%"}} >
            <h1>What To Do?</h1>
            <h3>well we'll help you in knowing</h3>
            <h2> Welcome {login && login.user.userName} !</h2>
        </div>
    )
}