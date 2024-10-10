import "../css/layout.css"
const Navigationbar = () => {
//   if(props==1){
//     return<>
//     </>
//   }else if(props==2){
//     return<>
//     </>
//   }else{
    return<>
    <div className="container">
    <nav className="navbar">
        <div className="nav-links">
        <div className="nav-item"><a href="#home">Home</a></div>
            <div className="nav-item"><a href="#about">About</a></div>
            <div className="nav-item"><a href="#services">Services</a></div>
        </div>
        <div className="nav-links">
            <div className="nav-item"><a href="#contact">Contact</a></div>
        </div>
    </nav>
    </div>
    </>
//   }
};

export default Navigationbar;
