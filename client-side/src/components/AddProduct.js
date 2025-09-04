// import react from 'react';
import react, { useState, useEffect } from "react";
const AddProduct = () => {

    const [name, setName] = react.useState('');
    const [price, setPrice] = react.useState('');
    const [category, setCategory] = react.useState('');
    const [company, setCompany] = react.useState('');

    console.log(name, price, category, company);
    
    const submitData = async () => {
      let userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
    }
    return (
        <div className='register'>
            <div className="register_box">
                <input className='inputBox' type="text" placeholder='Enter Product Name' onChange={(e)=> setName(e.target.value)} />
                <input className='inputBox' type="text" placeholder='Enter Product Price' onChange={(e)=> setPrice(e.target.value)} />
                <input className='inputBox' type="text" placeholder='Enter Product Category' onChange={(e)=> setCategory(e.target.value)} />
                <input className='inputBox' type="text" placeholder='Enter Product Company'  onChange={(e)=> setCompany(e.target.value)}/>
                <button className='signUp' onClick={submitData}>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct;