import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ChangePassword from '../components/Shop/ChangePassword';
import styles from '../styles/styles';
import UserDashboardHeader from '../components/Layout/UserDashboardHeader';
const ChangePasswordPage = () => {
  return (
    <div>
    <UserDashboardHeader />
    <div className="w-full flex">
    <div className="flex items-start justify-between w-full">
    <div className="w-[80px] 800px:w-[330px]">
      <ProfileSidebar active={6} />
      </div>

      
       <ChangePassword/>
       </div>
    </div>
  </div>
  )
}

export default ChangePasswordPage;