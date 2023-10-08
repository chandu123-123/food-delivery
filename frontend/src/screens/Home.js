import React from "react";
import BNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carouseel from "../components/Carouseel";
import Cards from "../components/Cards"
import { CartProvider } from "../components/ContextReducer";
const Home = () => {
  return (

    <div>
  
      <BNavbar></BNavbar>
      <div>
        <div>
          <Carouseel></Carouseel>
        </div>
        <div  style={{display:"flex", flexWrap: 'wrap'}}>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      
        

        
        

        </div>
       
      </div>
      <Footer></Footer>
  
    </div>
  );
};

export default Home;
