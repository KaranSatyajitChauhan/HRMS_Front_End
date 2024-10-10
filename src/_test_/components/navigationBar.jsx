import "../css/layout.css"
const Navigationbar = (props) => {
    console.log("3  navigationBar",props)
//   if(props==1){
//     return<>
//     </>
//   }else if(props==2){
//     return<>
//     </>
//   }else{

if(props.loginstatus == "logedin"){
    return<>
    <div className="container">
    <nav className="navbar">
        <div className="nav-links">
            <div className="nav-item"><a href="#home">Home</a></div>
            <div className="nav-item"><a href="#about">About</a></div>
            <div className="nav-item"><a href="#services">Services</a></div>
        </div>
        <div className="nav-links">
        <div className="nav-item"><a href="#contact">Account</a></div>
        </div>
    </nav>
    </div>
    </>
}else if(props.loginstatus== "Admin"){
    return<>
    <div className="container">
    <nav className="navbar">
        <div className="nav-links">
            <div className="nav-item"><a href="#home">Home</a></div>
            <div className="nav-item"><a href="#about">About</a></div>
            <div className="nav-item"><a href="#services">Services</a></div>
        </div>
        <div className="nav-links">
        <div className="nav-item"><a href="#contact">Account</a></div>
        </div>
    </nav>
    </div>
    </>
}
else{
    return<>
    <div className="container">
    <nav className="navbar">
        <div className="nav-links">
            <div className="nav-item"><a href="#home">Home</a></div>
            <div className="nav-item"><a href="#about">About</a></div>
            <div className="nav-item"><a href="#services">Services</a></div>
        </div>
        <div className="nav-links">
        <div className="nav-item"><a href="#contact">SignIn</a></div>
        <div className="nav-item"><a href="#contact">SignUp</a></div>
        <div className="nav-item"><a href="#contact">Account</a></div>
        </div>
    </nav>
    </div>
    </>
}
    
//   }
};

const Carousel =()=>{
    return<></>
};

export  {Navigationbar,Carousel};
