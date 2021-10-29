import React from 'react';
import './AddFood.css';

import { useForm } from "react-hook-form";
import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

const AddFood = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Navbar />
            <div className="add-food">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("tittle", { required: true })} placeholder="tittle" />
                    {errors.tittle?.type === 'required' && "title is required"}

                    <input {...register("description", { required: true })} placeholder="description" />
                    {errors.description && "description is required"}

                    <input type="number" {...register("price")} placeholder="price" />
                    {errors.price && "price is required"}

                    <input {...register("imageUrl", { required: true })} placeholder="imageUrl" />
                    {errors.imageUrl?.type === 'required' && "imageUrl is required"}

                    <input type="submit" />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddFood;