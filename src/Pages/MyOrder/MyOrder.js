import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../ContextProvider/useAuth';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar';
import './MyOrder.css';

const MyOrder = () => {
    const { user } = useAuth();
    const [order, setOrder] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/purches?email=${user.email}` , {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if(res.status === 200){
                    return res.json();
                }
                else if(res.status === 401){
                    history.push('/login');
                }
            })
            .then(data => setOrder(data))

            .catch(error => console.log(error))
    }, []);

    console.log(user.email);
    return (
        <div>
            <Navbar />
            <h1 className="order-tittle">my order</h1>
            {
                order?.length ?
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