import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import UserProfile from '../components/Shop/UserProfile';


const UserProfilePage = () => {
  return (
    <div>
    <AddHeader />
    <div className="flex w-full items-start justify-between">
      <div className="w-[80px] 800px:w-[330px]">
      <ProfileSidebar active={1}/>
      </div>
       <UserProfile/>
    </div>
  </div>
  )
}

export default UserProfilePage;