import React, {Component} from "react";
import './App.css'; // Assuming you have a CSS file for styling
import img1 from './images/drugs.png';
import img2 from './images/Group 6.png';
import img3 from './images/Group 8.png';
import img4 from './images/Vector.png';
import img5 from './images/Alarm.png';
import img6 from './images/tablets.png';
import img7 from './images/Stars.png';
import img8 from './images/Paracetamol.png';
import img9 from './images/Vitamins.png';
import img10 from './images/Probiotic.png';
import img11 from './images/Group 31.png';
import img12 from './images/Group 32.png';   
import img13 from './images/Group 33.png';
import img14 from './images/facebook.png'; 
import img15 from './images/twitter.png' ;
import img16 from './images/instagram.png';
import img17 from './images/linkedin.png'
import img18 from './images/Call.png';
import img19 from './images/Mail.png';
import img20 from './images/Location.png';

class Screen extends React.Component {

render() {
    return (
         <div>
                <nav className="navbar">

                    <div className="medicare">
                    <p >MediCare </p>
                    
                    </div>

                    <div className="nav-items">
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <div className="search-container">
                        <input className="search" type="text" placeholder="Search" />
                        <button className='signin' type="submit">Sign in </button>
                    </div>
                    </div>
                </nav>

                <div className="medicare-content">
                    <div className="content">
                        <h1>Your Health, Our Priority</h1>
                        <p>24/7 Professional Care & online Pharmacy Services</p>
                        
                        <div className="Vector-Alarm">

                            <div className="Vector-text">
                                <img src={img4} alt="Vector.png" className="Vector" />
                                <p className="Lincense">Lincensed Pharmacy</p>
                            </div>

                        <div className="Alarm-text">
                            <img src={img5} alt="Alarm.png" className="Alarm" />
                            <p>24/7 Service</p>
                        </div>

                    </div>

                    {/* .buttons-container */}
                        <div className="buttons-container">
                            <button className="getstartedbtn btn btn-primary">Shop Medicine</button>
                            <button className="btn btn-secondary">Book Consultation</button>
                        </div>
                    
                    

                    </div>
                    <img src={img1} alt="Drugs" className="drugs" />
                </div>

                <h3 className="heading1">Our Services</h3>

                <div className="groups">
                    <img src={img2} alt='Group6.png' className="group6" />
                     <img src={img3} alt='Group8.png' className="group8" />
                </div>

                    <h3 className="heading2">Popular Products</h3>

            <div className="products">
                
                <div className="card1">
                    <div className="tablets-container1">
                        <img src={img6} alt='tablets.png' className="tablets"/>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '8px'}}></div>
                        <p>Vitamin C Complex</p>

                        <div className="rating1">
                            <p className="price1">$24.99</p>
                            <img src={img7} alt='Stars.png' className="Star1" />
                        </div>

                        <button className="addtocart1">Add to Cart</button>
                    </div>
                </div>

                <div className="card2">
                    <div className="tablets-container2">
                        <img src={img8} alt='Paracetamol.png' className="tablets2"/>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '8px'}}></div>
                        <p>Omega-3 Fish Oil</p>

                        <div className="rating2">
                            <p className="price2">$19.99</p>
                            <img src={img7} alt='Stars.png' className="Star2" />
                        </div>

                        <button className="addtocart2">Add to Cart</button>
                        
                    </div>
                </div>

                <div className="card3">
                    <div className="tablets-container3">
                        <img src={img9} alt='Vitamins.png' className="tablets3"/>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '8px'}}></div>
                        <p>Multivitamin Daily</p>

                        <div className="rating3">
                            <p className="price3">$29.99</p>
                            <img src={img7} alt='Stars.png' className="Star1" />
                        </div>

                        <button className="addtocart3">Add to Cart</button>
                    </div>
                </div>

                <div className="card4">
                    <div className="tablets-container4">
                        <img src={img10} alt='Probiotics.png' className="tablets4"/>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}></div>
                        <p>Probiotic Supplement</p>

                        <div className="rating4">
                            <p className="price1">$34.99</p>
                            <img src={img7} alt='Stars.png' className="Star4" />
                        </div>

                        <button className="addtocart4">Add to Cart</button>
                    </div>
                </div>

            </div>

            <div className="chooseUs">
                <h3 className="heading3">Why Choose Us</h3>
                
                <div className="chooseUs-content">
                    <img src={img11} alt="Group 31" className="chooseUs-image1" />
                    <img src={img12} alt="Group 32" className="chooseUs-image2" />
                    <img src={img13} alt="Group 33" className="chooseUs-image3" />
                </div>  
            </div>

        <div className="updates">
            <h3 className="heading4">Stay Updated</h3>
            <p className="updated-text">Get the latest health tips and product updates</p>

            <div className="email-container">
                <input type="email" placeholder="Enter your email" className="email-input" />
                <button className="subscribe-btn">Subscribe</button>

            </div>
        </div>
        <div className="footer">
            <div className="footer-medicare">
                <p className="footer-text">MediCare+</p>

                <div className="footer-links">
                    <p className="footer-description">Your trusted healthcare partner, providing quality medical services and products.</p>
                    
                    <div className="icons">
                        <img src={img14} alt='facebook' className="facebook-icon"/>
                        <img src={img15} alt='twitter' className="twitter-icon"/>
                        <img src={img16} alt='instagram' className="instagram-icon"/>   
                        <img src={img17} alt='linkedin' className="linkedin-icon"/>
                    </div>
                </div>
            </div>
                <div className="quick-links">
                    <h4 className="quick-links-title">Quick Links</h4>
                    <ul className="quick-links-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
         <div className="services-footer"> 
            <h4 className="services-title">Services</h4>
            <ul className="services-list">
                <li><a href="#consultation">Online Consultation</a></li>
                <li><a href="#prescriptions">Prescription Services</a></li>
                <li><a href="#delivery">Home Delivery</a></li>
                <li><a href="#health-tips">Health Tips</a></li>
            </ul>  
        </div>

            <div className="contact">
                <h4 className="services-title">Contact Us</h4>
                <ul className="services-list">
                    <li><a href="phone"><img src={img18} alt="Call" className="contact-icon"/>+1(555)123-4567</a></li>
                    
                    <li><a href="footer-email"><img src={img19} alt="Mail" className="mail-icon"/>support@medicare.com</a></li>
                    
                    <li><a href="location"><img src={img20} alt="Location" className="location-icon"/>123 Health Street, Medical City, MC 12345</a></li>
                </ul> 

                 
            </div>
        </div>
        
        <div className="footer-bottom">
            <hr className="footer-line"/> 
            <p className="footer-bottom-text">© 2023 MediCare+. All rights reserved.</p>

        </div>
            </div>
       
    )
    
}   
}

export default Screen ;