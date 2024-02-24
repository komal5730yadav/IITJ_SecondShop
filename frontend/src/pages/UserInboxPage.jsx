import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import Userin from '../components/Shop/userin';
import styles from '../styles/styles';
import UserDashboardheader from '../components/Layout/UserDashboardHeader.jsx';
const UserInboxPage = () => {
  return (
    <div>
    <UserDashboardheader />
    <div className="w-full flex">
    <div className="flex items-start justify-between w-full">
    <div className="w-[80px] 800px:w-[330px]">
      <ProfileSidebar active={4} />
      </div>
      
       <Userin/>
       </div>
    </div>
  </div>
  )
}

export default UserInboxPage