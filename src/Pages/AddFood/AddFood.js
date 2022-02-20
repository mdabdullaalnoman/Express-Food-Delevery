import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar';
import './AddFood.css';


const AddFood = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://spooky-ghoul-75443.herokuapp.com/foods', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('food added success fully')
                }
                else{
                    alert('some things went wrong')
                }
            })
            
            reset();
    };
    return (
        <div>
            <Navbar />
            <h1 className="order-tittle">Add Food</h1>
            <div className="add-food">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Tittle</p>
                    <input {...register("tittle", { required: true })} placeholder="tittle" />
                    {errors.tittle?.type === 'required' && "title is required"}

                    <p>Description</p>
                    <input {...register("description", { required: true })} placeholder="description" />
                    {errors.description && "description is required"}

                    <p>Price</p>
                    <input type="number" {...register("price")} placeholder="price" />
                    {errors.price && "price is required"}

                    <p>ImageUrl</p>
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