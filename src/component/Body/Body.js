import React from 'react';
import { Link } from 'react-router-dom';

const Body = (props) => {
    const {name, img} = props.data
    return (
        <div className="col-md-2 card m-3">
            <div className="p-3">
                <img src={img} alt="ok"/>
            </div>
             <h3><Link className="nav-link" to={`/destination/${name}`}>{name}</Link></h3>
        </div>
    );
};

export default Body;