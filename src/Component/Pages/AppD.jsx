import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';


const AppD = ({ app }) => {
    const { image, title, downloads, ratingAvg, description,id } = app;
    //console.log(app)
    return (
        <Link to={`/appdetails/${id}`}>
           
                <div className='p-4 lg:max-w-80 mx-auto max-w-70 rounded-lg bg-white h-full flex flex-col '>
                <img className='mx-auto ' src={image} alt="" />
                <p className='font-bold my-2 '>{title} : <span className='font-normal flex-1'>{description}</span></p>
                <div className='mt-3 flex justify-between'>
                    <div className="badge badge-soft badge-success ">     <ArrowDownToLine className='max-h-4' /> {downloads / 1000000}M</div>
                    <div className="badge badge-soft badge-warning "> <Star className='max-h-4' /> {ratingAvg}</div>

                </div>
            </div>
            

        </Link>
    );
};

export default AppD;