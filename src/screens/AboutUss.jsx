import React from 'react';
import { Header } from '../screens/articles/components/NavBar'; 
import {Footer} from '../layout/Footer';

const AboutUs = () => {
  return (
    
    <div >
      <Header />
      <div  className="about-us-content">
       
      <div className="back-image ">
      <div className="about-us-text">
      <h>Our App</h>
      <p>
    Welcome to <span>PureWood</span>, your destination for exquisite wooden craftsmanship! Our app, PureWood, offers a wide range of beautifully crafted wooden products designed to enhance your home and lifestyle. With <span>PureWood</span>, you can explore and purchase items such as Wooden Water Covers, Wooden Serving Bowls, Wooden Glasses, Wooden Cups, Wooden Coffee Mugs, Wooden Brushes, Wooden Bottles, Luxury Couches, and Wooden Single Drawers, all through one intuitive platform. Our commitment to quality and artisanal design ensures that each piece is both functional and a work of art. Whether you're looking for everyday essentials or luxury home decor, PureWood provides a seamless shopping experience that brings the beauty of natural wood into your home. Discover the elegance and craftsmanship of PureWood today, and transform your living space with our unique wooden products!
</p>

  </div>
  <div>
  < Footer />
  </div>
</div>

</div>
      {/* <div>cc</div> */}
      
      <style>
        {`body {
        height: 100%;
            overflow-x: hidden;
            background-color:#fffaf5;
            // background-image: url
            // background-image: url(./images/promotional/prom1)
          }
           
         

            .about-us-content {
            display: flex;
            flex-direction:row;
            justify-content: space-between;
            width: 100%;
            margin-bottom:10%;
            margin-right:auto;
            margin-left:90vh;
            }
            span{
                font-weight:bold;
                color:#0d775e;
            }
            .about-us-text {
            width:50%;
           	
            margin-top:20vh;
            margin-bottom:80vh;
            // margin-right:10vw;
             margin-left:100vh;
            }
            .image1{
             width:50%;
            //  height:65vh;
             margin-top:30vh;

            }
            .about-us-text p {
                font-size: 18px;
                line-height: 1.5;
            //     margin-bottom: 30px;
            //     text-align: justify; 
            //     margin-top:30px;
            margin-right:20px;
            margin-left:20px;
            text-align: justify; 
            margin-top:20px;
          }
            .about-us-text h{
                font-size: 30px;
                color:black;
                font-family: 'Times New Roman', Times, serif;
                font-weight:bold;
                margin-bottom: 60vh;
            }
            .about-us-image {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            
            }

            .about-us-image img {
            max-width: 100%;
            height: auto;
            }
            
            `}
                </style>
               
    </div>
  );
};

export default AboutUs;
