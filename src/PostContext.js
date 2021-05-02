import React, { useState, createContext } from 'react'

export const PostContext = createContext()

export const PostProvider = (props) => {
  const [state, setState] = useState({
    posts: [],
    selectedPostId: null,
    error: false,
    isLoading: false,
    modalText: ''
  })
  return (
    <PostContext.Provider value={[state, setState]}>
      {props.children}
    </PostContext.Provider>
  )
}
