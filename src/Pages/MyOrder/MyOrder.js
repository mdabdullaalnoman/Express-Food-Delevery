import React, { useEffect } from 'react';
import useAuth from '../../ContextProvider/useAuth';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar';

const MyOrder = () => {
    const {user} = useAuth();

    useEffect( () => {
        fetch(`http://localhost:5000/purches?email=${user.email}`)
        .then(res => res.json())
        .then(data => console.log(data))

        .catch(error => console.log(error))
    },[])
    console.log(user.email);
    return (
        <div>
            <Navbar/>
            <h1>this is my order</h1>
            <Footer/>
        </div>
    );
};

export default MyOrder;