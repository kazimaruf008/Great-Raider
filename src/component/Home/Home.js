import React, { useState } from 'react';
import './Home.css'
import Data from '../FackData/FackData.json'
import Body from '../Body/Body';
const Home = () => {
    const [data, setData] = useState(Data);
    return (
        <div className="home-bg">
            <div className="component">
                <div className="m-t mt-5">
                    <div className="row d-flex justify-content-center">        
                        {
                            data.map(data => <Body data={data} key={data.name}></Body>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


