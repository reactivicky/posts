import React, { useContext } from 'react'
import Loader from 'react-loader-spinner'
import classes from './ModalContainer.module.css'

import {PostContext} from '../../PostContext'

const ModalContainer = (props) => {
  const [state] = useContext(PostContext)

  return (
    <div className={classes.ModalContainer}>
      <div className={classes.Modal}>
        <Loader
          type="Circles"
          color="#00BFFF"
          height={150}
          width={150}
        />
        <p>{state.modalText}...</p>
      </div>
    </div>

  )
}

export default ModalContainer
