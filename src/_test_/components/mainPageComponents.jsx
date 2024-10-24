import "../css/layout.css"
import { SearchBar,DropDown, SearchBarWithLink } from "./metadataDropdown";
const Navigationbar = (props) => {
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
            <div className="nav-item"><a href="/">Home</a></div>
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
            <div className="nav-item"><a href="/">Home</a></div>
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
            <div className="nav-item"><a href="/">Home</a></div>
            <div className="nav-item"><a href="#about">About</a></div>
            <div className="nav-item"><a href="#services">Services</a></div>
        </div>
        <div className="nav-links">
            <SearchBar/>
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
    return<>
    <div className="carouseContainer">
        <div className="carousel">
            
            <img src="../../../public/Images/JeanDrapeauWinter.jpg" alt="abc" className="carouselImage"/>
        </div>
        <div className="carouselsidebar">
            Side bar of details for carousel image asdasd as Utilizing the Public Folder: The simplest way to ensure your images display correctly is to place them in the public folder of your React.js project. Once your image is safely nestled in the public folder, you can reference it in your components using an absolute path.
            The tag is used to embed an image in an HTML page.
        </div>
    </div>
    </>
};

const Footter =()=>{
    return<>
    <div className="footerContainer">
        <div className="footerUlist">1 company logo and detials</div>
        <div className="listContainer">
            <ul className="footerUlist">
            <li>Item One</li>
            <li>Item One</li>
            <li>Item One</li>
            <li>Item One</li>
            <li>Item One</li>
            </ul>
        </div>
        <div className="listContainer"> 
            <ul className="footerUlist">
            <li>Item One</li>
            <li>Item One</li>
            <li>Item One</li>
            <li>Item One</li>
            <li>Item One</li>
            </ul>
        </div>
        <div className="listContainer">
        <ul className="footerUlist">
            <li>Item One</li>
            <li>Item One</li>
            <li>Item One</li>
            <li>Item One</li>
            <li>Item One</li>
        </ul>
        </div>
    </div>
    </>
}

export  {Navigationbar,Carousel,Footter};
