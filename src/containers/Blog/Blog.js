import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import { PostContext } from '../../PostContext'
import ModalContainer from '../../components/ModalContainer/ModalContainer'
import Post from '../../components/Post/Post';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

const Blog = () => {
    const [state, setState] = useContext(PostContext)

    useEffect(() => {
        setState(prevState => ({ ...prevState, isLoading: true, modalText: 'Loading'}))
        axios.get('https://my-json-server.typicode.com/Srinivasan47/mockjson/posts')
            .then(response => {
                const posts = response.data;
                setState(prevState => ({ ...prevState, posts, isLoading: false }));
            })
            .catch(error => {
                setState(prevState => ({ ...prevState, error: true, isLoading: false }));
            });
    }, [setState])

    const postSelectedHandler = (id) => {
        setState(prevState => ({ ...prevState, selectedPostId: id }));
    }


    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!state.error) {
        posts = state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                category={post.Category}
                description={post.Description}
                imageURL={post.ImageURL}
                author={post.author}
                clicked={() => postSelectedHandler(post.id)} />;
        });
    }

    return (
        <div>
            {state.isLoading && <ModalContainer />}
            <section>
                <NewPost />
            </section>
            <section className={classes.Posts}>
                {posts}
            </section>
        </div>
    );
}


export default Blog;