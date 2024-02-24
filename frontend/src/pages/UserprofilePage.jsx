import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import UserProfile from '../components/Shop/UserProfile';
import styles from '../styles/styles';
import UserDashboardHeader from '../components/Layout/UserDashboardHeader';

const UserProfilePage = () => {
  return (
    <div>
    <UserDashboardHeader />
    <div className="w-full flex">
    <div className="flex items-start justify-between w-full">
    <div className="w-[80px] 800px:w-[330px]">
      <ProfileSidebar active={1}/>
      </div>
       <UserProfile/>
       </div>
    </div>
  </div>
  )
}

export default UserProfilePage;