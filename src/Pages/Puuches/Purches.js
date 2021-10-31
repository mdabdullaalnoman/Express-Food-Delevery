import React, { useEffect } from 'react';
import '../AddFood/AddFood.css';

import { useForm } from "react-hook-form";
import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';
import useAuth from '../../ContextProvider/useAuth';
import { useParams } from 'react-router';
import { useState } from 'react';

const Purches = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [singleFood, setSingleFood] = useState({});
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset();
    };

    // clicked food data load---------------------------------
    useEffect(() => {
        fetch(`http://localhost:5000/foods/${id}`)
            .then(res => res.json())
            .then(data => setSingleFood(data))

            .catch(err => {
                console.log(err.message);
            })
    }, []);
    return (
        <div>
            <Navbar />
            <div className="add-food">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("tittle", { required: true })} placeholder="name" defaultValue={user?.displayName} />
                    {errors.tittle?.type === 'required' && "title is required"}

                    <input {...register("description", { required: true })} placeholder="description"/>
                    {errors.description && "description is required"}

                    <input type="number" {...register("price")} placeholder="price" />
                    {errors.price && "price is required"}

                    <input type="date" {...register("date")} placeholder="date" />
                    {errors.date && "date is required"}

                    <input type="submit" />

                </form>

            </div>
            <Footer />
        </div>
    );
};

export default Purches;