import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories,setCatagories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then(data => setCatagories(data))
        .catch(err => {
            console.log(err.message);
        })
    },[])
    return (
        <div>
            <h4 className="fw-bolder mb-3">All Caterogy</h4>
            <div>
                {
                    catagories.map(category => <div key={category.id}>
                        <p><Link to={`/category/${category.id}`} className='text-decoration-none text-secondary px-3 fw-semibold' >{category.name}</Link></p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftNav;