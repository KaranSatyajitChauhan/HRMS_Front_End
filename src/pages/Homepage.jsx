import {Navigationbar,Carousel,Footter} from "../_test_/components/mainPageComponents";
const HomePage = () => {
  return (
    <>
      {/* <Navigationbar loginstatus ="logedin"/>
      <Navigationbar loginstatus ="Admin"/> */}
      <Navigationbar />
      <Carousel/>
      <Footter/>
    </>
  );
};

export default HomePage;
