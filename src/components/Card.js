import React,{useState} from 'react';
import {  useSelector } from 'react-redux';
const Card = ({link,title}) => {


     return (
        <>
        <div className='cont' >
            <h3>{title}</h3>
            <a className='btn btn-primary' href={link}>link</a>
        </div>

        </>
     )
}


export default Card