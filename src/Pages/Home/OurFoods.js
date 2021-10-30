import React, { useEffect, useState } from 'react';
import './OurFoods.css';

const OurFoods = () => {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFood(data))

            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <div className="food-tittle">
                <p>Quick pic</p>
                <h1>Popular Foods</h1>
            </div>
            <div className="food-warp">
                {
                    food.map(food =>
                        <div className="food" key={food._id}>
                            <div className="food-img">
                                <img src={food.imageUrl} alt="" />
                            </div>
                            <div className="food-content">
                                <h1>{food.tittle}</h1>
                                <p>{food.description}</p>
                                <h3>$ {food.price}.99 </h3>
                                <button>buy now</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OurFoods;