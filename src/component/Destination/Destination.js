import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Data from '../FackData/FackData.json'

const Destination = () => {
    let { name } = useParams();
    const [destination, setDestination] = useState();
    useEffect(() => {
        if (name === Data.name) {
            setDestination(Data)
        }
    }, [name])
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Destination;