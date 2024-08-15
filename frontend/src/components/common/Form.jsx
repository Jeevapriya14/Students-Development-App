import React, { useState } from "react";
import { useForm } from 'react-hook-form';

export default function Form({ onAddData }) {
    const { register, handleSubmit, reset } = useForm();
    const [tips, setTips] = useState('');
    const [congratulations, setCongratulations] = useState('');

    const onSubmit = (data) => {
        onAddData(data); // Pass data to parent component
        reset(); // Reset form fields

        // Check if any mark is less than 50
        if (data.mark <= 50) {
            setTips('Tip: Consider reviewing the subject material and practicing more to improve your understanding and performance.');
        } else {
            setTips('');
        }

        // Check mark range for congratulations
        if (data.mark >= 50 && data.mark < 80) {
            setCongratulations('Good job! You are doing well, keep up the good work and aim higher!');
        } else if (data.mark >= 80 && data.mark <= 100) {
            setCongratulations('Excellent job! Keep up the great work and maintain your score!');
        } else {
            setCongratulations('');
        }
    };

    return (
        <div className="form max-w-sm mx-auto w-72 text-white">
            <h1 className="font-bold pb-4 text-xl text-white">Subject Name:</h1>
            <form id='form' onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <div className="input-group text-black">
                        <input type='text' {...register('name')} placeholder='Type Subject Name' className="form-input" />
                    </div>
                    <select className="form-input text-black" {...register('type')}>
                        <option value='Mark 1'>Mark 1</option>
                        <option value='Mark 2'>Mark 2</option>
                        <option value='Mark 3'>Mark 3</option>
                        <option value='Mark 4'>Mark 4</option>
                        <option value='Mark 5'>Mark 5</option>
                    </select>
                    <div className="input-group text-black">
                        <input type='number' {...register('mark', { valueAsNumber: true })} placeholder='Mark' className="form-input" />
                    </div>
                    <div className="submit-btn">
                        <button type="submit" className="border py-2 text-white bg-indigo-500 w-full">Submit</button>
                    </div>
                </div>
            </form>
            {tips && (
                <div className="tips mt-4 p-4 border border-yellow-500 bg-yellow-100 text-yellow-800 rounded">
                    <h2 className="font-bold">Tips for Improvement:</h2>
                    <p>{tips}</p>
                </div>
            )}
            {congratulations && (
                <div className="congratulations mt-4 p-4 border border-green-500 bg-green-100 text-green-800 rounded">
                    <h2 className="font-bold">Congratulations:</h2>
                    <p>{congratulations}</p>
                </div>
            )}
        </div>
    );
}
