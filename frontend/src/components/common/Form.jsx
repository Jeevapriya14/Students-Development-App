import React from "react";
import {useForm} from 'react-hook-form';
import List from './List';
export default function Form(){
    const{register,handleSubmit,resetField}=useForm();
    const onSubmit=(data)=>{
        console.log(data)
    }

    return(
        <div className="form max-w-sm mx-auto w-72 text-white">
            <h1 className="font-bold pb-4 text-xl text-white">Subject Name:</h1>
            <form id='form' onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <div className="input-group">
                        <input type='text' {...register('name')} placeholder='Type Subject Name' className="form-input"></input>
                    </div>
                    <select className="form-input text-white" {...register('type')}>
                        <option value='Mark 1' >Mark 1</option>
                        <option value='Mark 2' >Mark 2</option>
                        <option value='Mark 3' >Mark 3</option>
                        <option value='Mark 4' >Mark 4</option>
                        <option value='Mark 5' >Mark 5</option>
                    </select>
                    <div className="input-group">
                        <input type='text' {...register('mark')} placeholder='Mark' className="form-input"></input>
                    </div>
                    <div className="submit-btn">
                        <button className="border py-2 text-white bg-indigo-500 w-full">Submit</button>
                    </div>
                </div>
            </form>
            <List></List>
        </div>
    )
}