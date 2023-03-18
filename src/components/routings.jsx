import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import RegisterForm from './form';
import { useState } from 'react';
 
const Routings = () => {

    return ( 
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<RegisterForm/>}></Route>
        </Routes>
     );
}
 
export default Routings;