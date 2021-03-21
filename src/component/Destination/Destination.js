import React, {useState} from 'react';
import { useParams } from 'react-router';
import Bike from '../images/Frame.png'
import Bus from '../images/Frame-1.png'
import Car from '../images/Frame-2.png'
import Train from '../images/Group.png'
import"./Destination.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import MyComponent from '../MyComponent/MyComponent';


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

    const [pickup, setPickup] = useState('');
    const [pickTo, setPickTo] = useState('');
    return (
        
        <div className ="component mt-5">
           <div className="row">
               <div className="col-md-3">
                   <div className="text-justify pick-form" id="form">
                        <form className="text-center">
                            <p className="pick"><b>Pick up</b></p>
                            <input type="text" onChange={e => setPickup(e.target.value)}/><br/>
                            <p className="pick"><b>Pick to</b></p>
                            <input type="text" onChange={e => setPickTo(e.target.value)}/><br/><br/>
                            <h3 className="btn-success  btn-padding" onClick={handelSearch}>Search</h3>
                        </form>
                   </div>
                    <div className="all-card text-center" id="all-card">
                        <div className="d-flex justify-content-between">
                            <h4>pick up:</h4><h4>{pickup}</h4>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h4>pick To:</h4><h4>{pickTo}</h4>
                        </div>
                        <div className="d-flex justify-content-around mt-3">
                            <div className= "img-container">
                                {
                                    name == "Bus"? <img src={Bus} alt="img"/>: name == 'Car' ? <img src={Car} alt="img"/>: name == 'Train' ? <img src={Train} alt="img"/>:<img src={Bike} alt="img"/>
                                }
                            </div>
                            <h3>{name} </h3>
                            <h3><FontAwesomeIcon icon={faUser}/> 4</h3>
                            <h4><b>$67</b></h4>
                        </div>
                        <div className="d-flex justify-content-around mt-3">
                            <div className= "img-container">
                                {
                                    name == "Bus"? <img src={Bus} alt="img"/>: name == 'Car' ? <img src={Car} alt="img"/>: name == 'Train' ? <img src={Train} alt="img"/>:<img src={Bike} alt="img"/>
                                }
                            </div>
                            <h3>{name} </h3>
                            <h3><FontAwesomeIcon icon={faUser}/> 2</h3> 
                            <h4><b>$47</b></h4>
                        </div>
                        <div className="d-flex justify-content-around mt-3">
                            <div className= "img-container">
                                {
                                    name == "Bus"? <img src={Bus} alt="img"/>: name == 'Car' ? <img src={Car} alt="img"/>: name == 'Train' ? <img src={Train} alt="img"/>:<img src={Bike} alt="img"/>
                                }
                            </div>
                            <h3>{name} </h3>
                            <h3><FontAwesomeIcon icon={faUser}/> 1</h3>
                            <h4><b>$27</b></h4>
                        </div>
                        <button onClick={handelClose} className="btn btn-success mt-3">close</button>
                    </div>
               </div>
               <div className="col-md-9">
                   <MyComponent></MyComponent>
               </div>
           </div>
        </div>
    );
};

export default Destination;