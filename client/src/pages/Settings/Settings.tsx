import React from 'react'
import { leftArrow, logOut } from '../../assets/icons'
import { userImage } from '../../assets/images'
import { Header } from '../../components'
import Styles from './Settings.module.css'
export const Settings = () => {
  return (
    <div>
      <Header
        left_icon={leftArrow}
        right_icon={logOut}
        left_route_location="/home"
        right_route_location="/"
        title="Settings"
        
      />
      <div className={Styles.card}>
        <div className={Styles.image_wrapper}>
        <img src={userImage} alt="" className={Styles.image_size}/>
        </div>
        <div></div>
      </div>
    </div>
  )
}

