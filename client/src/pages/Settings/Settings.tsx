import React from 'react'
import { leftArrow, logOut } from '../../assets/icons'
import { Header } from '../../components'

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
      <div>
        
      </div>
    </div>
  )
}

