import React from 'react';

import classes from './Post.module.css';

const post = (props) => (
    <article className={classes.Post} onClick={props.clicked}>
        <h1>{props.title}</h1>
        <p>{props.category}</p>
        <p>{props.description}</p>
        <img src={props.imageURL} alt=""/>
        <div className={classes.Info}>
            <div className={classes.Author}>{props.author}</div>
        </div>
    </article>
);

export default post;