import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Appdetails = () => {
    const appData = useLoaderData()
    const {id} = useParams()
    console.log(id)

    return (
        <div>
            
        </div>
    );
};

export default Appdetails;