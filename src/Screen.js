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



            </div>
       
    )
    
}   
}

export default Screen ;