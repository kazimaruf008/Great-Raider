import React from 'react';
import { useParams } from 'react-router';
import Bike from '../images/Frame.png'
import Bus from '../images/Frame-1.png'
import Car from '../images/Frame-2.png'
import Train from '../images/Group.png'
import"./Destination.css"
import SimpleMap from '../Map/SimpleMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Destination = () => {
    let { name } = useParams();
    const handelSearch = () => {
        const form = document.getElementById('form')
        const allCart = document.getElementById('all-card')
        form.style.display="none"
        allCart.style.display="block"
    }
    const handelClose = () => {
        const form = document.getElementById('form')
        const allCart = document.getElementById('all-card')
        form.style.display="block"
        allCart.style.display="none"
    }
    return (
        
        <div className ="container mt-5">
           <div className="row">
               <div className="col-md-3">
                   <div className="text-justify pick-form" id="form">
                        <form className="text-center">
                            <p className="pick"><b>Pick up</b></p>
                            <input type="text" required/><br/>
                            <p className="pick"><b>Pick to</b></p>
                            <input type="text" required/><br/><br/>
                            <button className="btn-success  btn-padding" onClick={handelSearch}>Search</button>
                        </form>
                   </div>
                    <div className="all-card" id="all-card">
                        <div className="d-flex justify-content-between mt-3">
                            <h3>{name} </h3>
                            <h3><FontAwesomeIcon icon={faUser}/> 4</h3>
                            
                            <div className= "img-container">
                                {
                                    name == "Bus"? <img src={Bus} alt="img"/>: name == 'Car' ? <img src={Car} alt="img"/>: name == 'Train' ? <img src={Train} alt="img"/>:<img src={Bike} alt="img"/>
                                }
                            </div>
                            <h4><b>$67</b></h4>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h3>{name} </h3>
                            <h3><FontAwesomeIcon icon={faUser}/> 4</h3>
                            
                            <div className= "img-container">
                                {
                                    name == "Bus"? <img src={Bus} alt="img"/>: name == 'Car' ? <img src={Car} alt="img"/>: name == 'Train' ? <img src={Train} alt="img"/>:<img src={Bike} alt="img"/>
                                }
                            </div>
                            <h4><b>$67</b></h4>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h3>{name} </h3>
                            <h3><FontAwesomeIcon icon={faUser}/> 4</h3>
                            
                            <div className= "img-container">
                                {
                                    name == "Bus"? <img src={Bus} alt="img"/>: name == 'Car' ? <img src={Car} alt="img"/>: name == 'Train' ? <img src={Train} alt="img"/>:<img src={Bike} alt="img"/>
                                }
                            </div>
                            <h4><b>$67</b></h4>
                        </div>
                        <button onClick={handelClose} className="btn-success btn-close mt-5">close</button>
                    </div>
               </div>
               <div className="col-md-9">
                   {/* <SimpleMap></SimpleMap> */}
               </div>
           </div>
        </div>
    );
};

export default Destination;