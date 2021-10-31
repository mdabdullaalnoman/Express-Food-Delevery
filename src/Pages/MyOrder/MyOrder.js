import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../ContextProvider/useAuth';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar';
import './MyOrder.css';

const MyOrder = () => {
    const { user } = useAuth();
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`https://spooky-ghoul-75443.herokuapp.com/purches`)
            .then(res => res.json())
            .then(data => setOrder(data))

            .catch(error => console.log(error))
    }, []);

    console.log(user.email);
    return (
        <div>
            <Navbar />
            <h1 className="order-tittle">my order</h1>
            {
                order.length ?
                    <div className="myOrder-warp">
                        {
                            order.map(food =>
                                <div key={food._id}>
                                    <p>{food.date}</p>
                                    <p>{food.description}</p>
                                    <button>cancel</button>
                                </div>
                            )
                        }
                    </div>
                    :
                    <h1>loading...</h1>
            }
            <Footer />
        </div>
    );
};

export default MyOrder;