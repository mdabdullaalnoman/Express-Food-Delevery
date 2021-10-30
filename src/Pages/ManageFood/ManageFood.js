import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar';

const ManageFood = () => {
    const [manageFood, setManageFood] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setManageFood(data))

            .catch(error => console.log(error))
    }, [manageFood]);

    const handleFoodDelete = (id) => {
        const process = window.confirm('sure ? you want to delete this product');
        if (process) {
            fetch(`http://localhost:5000/foods/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted successfully')
                    }
                    else {
                        alert('something went worng')
                    }
                })
        }
    }

    return (
        <div>
            <Navbar />
            {
                manageFood.length
                    ?
                    <div className="manage-food">
                        {
                            manageFood.map(food =>
                                <div key={food._id}>
                                    <h1>{food.tittle}</h1>
                                    <button onClick={() => handleFoodDelete(food._id)}>delete</button>
                                </div>
                            )
                        }
                    </div>
                    :
                    <h1>Loading...</h1>
            }
            <Footer />
        </div>
    );
};

export default ManageFood;