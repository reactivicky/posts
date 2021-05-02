import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
// import validator from 'validator';
import { PostContext } from '../../PostContext'
import classes from './NewPost.module.css';

const NewPost = () => {
    const [state, setState] = useContext(PostContext)

    const [title, settitle] = useState('')
    const [Category, setcategory] = useState('')
    const [Description, setdescription] = useState('')
    const [ImageURL, setimageURL] = useState('')
    const [author, setauthor] = useState('')
    const [addOrEdit, setaddOrEdit] = useState(true)

    useEffect(() => {
        if (state.selectedPostId !== null) {
            const selectedPost = state.posts.filter(post => post.id === state.selectedPostId)
            settitle(selectedPost[0].title)
            setcategory(selectedPost[0].Category)
            setdescription(selectedPost[0].Description)
            setimageURL(selectedPost[0].ImageURL)
            setauthor(selectedPost[0].author)
            setaddOrEdit(false)
        }
    }, [state])


    // const validateValue = (event) => {
    //     if (event.target.name === "title" && validator.isAlphanumeric(event.target.value)) {
    //         return settitle(event.target.value)
    //     }

    //     if (event.target.name === "category" && validator.isAlpha(event.target.value)) {
    //         return setcategory(event.target.value)
    //     }

    //     if (event.target.name === "author" && validator.isAlpha(event.target.value)) {
    //         return setauthor(event.target.value)
    //     }
    // }

    const postDataHandler = () => {
        const data = {
            title,
            Category,
            Description,
            ImageURL,
            author
        };
        if (addOrEdit) {
            setState(prevState => ({ ...prevState, isLoading: true, modalText: 'Saving'}))
            axios.post('https://my-json-server.typicode.com/Srinivasan47/mockjson/posts', data)
                .then(response => {
                    setState(prevState => ({ ...prevState, isLoading: false}))
                    console.log(response.data);
                });
        } else {
            setState(prevState => ({ ...prevState, isLoading: true, modalText: 'Saving'}))
            axios.put(`https://my-json-server.typicode.com/Srinivasan47/mockjson/posts/${state.selectedPostId}`, data)
                .then(response => {
                    console.log(response.data);
                    setState(prevState => ({ ...prevState, isLoading: false}))
                });
        }
    }


    return (
        <div className={classes.NewPost}>
            <h1>Add or Edit a Post</h1>
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={(event) => settitle(event.target.value)} />
            <label>Category</label>
            <input type="text" name="category" value={Category} onChange={(event) => setcategory(event.target.value)} />
            <label>Description</label>
            <textarea rows="4" value={Description} onChange={(event) => setdescription(event.target.value)} />
            <label>Image URL</label>
            <input type="text" value={ImageURL} onChange={(event) => setimageURL(event.target.value)} />
            <label>Author</label>
            <input type="text" name="author" value={author} onChange={(event) => setauthor(event.target.value)} />
            <button onClick={postDataHandler}>Add or Edit Post</button>
        </div>
    );
}


export default NewPost;