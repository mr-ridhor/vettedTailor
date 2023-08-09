import React from 'react'
import DashboardMain from '../Dashboard/DashboardMain'
import Profile from './Profile'
import { Outlet } from 'react-router-dom'

const ProfileHome = () => {
  return (
    <div>
        <DashboardMain>
            <Profile/>
            <Outlet/>
        </DashboardMain>
    </div>
  )
}

export default ProfileHome