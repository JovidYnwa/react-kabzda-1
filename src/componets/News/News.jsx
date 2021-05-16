import React from 'react';
import s from './News.module.css';


const News =(props) =>{
    return(
        <div className = {s.div}>
            {props.prop1}
        </div>
    )
}

export default News;