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
        fetch('https://spooky-ghoul-75443.herokuapp.com/purches' , {
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then( res => res.json())
        .then (data => {
            if(data.insertedId){
                alert(' successfully added this food')
            }
        })

        .catch(errors => {
            console.log(errors.message);
        })
        console.log(data);
        reset();
    };

    // post purche data --------------------------------------
    

    // clicked food data load---------------------------------
    useEffect(() => {
        fetch(`https://spooky-ghoul-75443.herokuapp.com/foods/${id}`)
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

                    <input {...register("email", { required: true })} placeholder="email" defaultValue={user?.email} />
                    {errors.email?.type === 'required' && "email is required"}

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