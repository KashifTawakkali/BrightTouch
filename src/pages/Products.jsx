import { Link } from "react-router-dom";
import React from 'react';
import product1 from '../assets/images/RemLogo.png'
import product2 from '../assets/images/pulselogo.jpg'
import product3 from '../assets/images/BookKeeper.jpg'
import product4 from '../assets/images/Physio.jpg'
import product5 from '../assets/images/RemSysBlue.png'
import product6 from '../assets/images/RemSys Pro.jpg'
import product7 from '../assets/images/AIMSLogo.png'


const Products = () => {
  return (
    <div>
      <section
        className="page-title centred"
        style={{
          backgroundImage: "url(src/assets/images/background/page-title-2.jpg)",
        }}
      >
        <div className="auto-container">
          <div className="content-box clearfix">
            <h1>Products</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>Products</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="box">
        <div className="row">
        <div className="col-md-6">
          <h1 id="mg1">REMSYS<br /> PAYROLL SOLUTION </h1>
      <p>Bellroy sells thinner-than-typical wallets. There's value to that — but what is it, and how do you get the consumer to understand it?</p>

      <p> To answer those questions, Bellroy divided its product page into three stages of the buyer's journey — understanding the problem, how to fix the problem, and how Bellroy can resolve the problem.</p>

      <p>
      There's even an interactive section that shows how the skinny wallet will fill up in comparison to standard wallets. As users move a slider back and forth along a line, both of the wallets fill up with cards and cash, visually displaying the very problem Bellroy's skinny wallet solves.</p>
        </div>
          <div className="col-md-6">
          <img id="pr1" src={product1} width="300px"/>
          </div>



          <div className="col-md-6">
          <img id="pr2" src={product2}  width="300px" />
          </div>

          <div className="col-md-6">
          <h1 id="mg1">HOSPITAL MANAGEMENT</h1>
          <p>Daily Harvest develops superfoods in the form of smoothies, soups, and more, and delivers them to your doorstep. What makes these foods' product pages so outstanding? They show you exactly what makes these foods so super in a format that's both clear and digestible — no pun intended.</p>


        <p>
        Check out one of Daily Harvest's smoothie product pages, below. Not only can you see what the smoothie looks like, but hovering over the lefthand preview icon, below the main image, shows you the foods used to create this drink. Scroll down, and you'll see each ingredient and a simple description of each one.</p>

          </div>
          <div className="col-md-6">
            <h1 id="mg1">DOCTORS</h1>
                  <p>The focus of Oreo's product page is how these simple, classic cookies can help people unleash their imaginations, dare to wonder, and become generally happier. It features a series of videos, one after another. One is accompanied by the lyrics, "It's so easy to let your imagination go when you play with Oreo," paying tribute to the age-old discussion about the "best" way to eat them. The page takes a creative, bold approach to marketing with what might otherwise be thought of as an ordinary snack.</p>   
          </div>
               <div className="col-md-6">
                      <img id="pr1" src={product3} width="250px" />

               </div>
       
          <div className="col-md-6">
                <img id="pr1"src={product5} width="250px" />

          </div>

          <div className="col-md-6">
              <h1 id="mg1">SMART ATTENDANCE APP</h1>
              <p>Volkswagen takes an interactive approach to its product marketing. Instead of listing all of the features you can have in a car, the company walks you through the process of actually building your car. As you go through that process, Volkswagen highlights the different features you could choose, then gives you a preview of what the car will look like and how that will affect the price.</p>
            </div>
        </div>


              <div className="col-md-6">
                     <h1 id="mg1">REMSYS PRO</h1>   
                     <p>Even though I'm not currently in the market for a new car, I personally had fun tinkering with the different customization features on the page. What color do I want? Do I want premium audio? (Yes.) It's an interesting way for the brand to eliminate the notorious connotations of "car salesmen," by allowing users to learn about and select features independently.</p>                
              </div>

                <div className="col-md-6">
                        <img id="pr1" src={product6} width="200px" />
                </div>

              


                
          </div>
            














        </div>




      </div>
      
  );
};

export default Products;
