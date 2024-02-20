import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import Userin from '../components/Shop/userin';

const UserInboxPage = () => {
  return (
    <div>
    <AddHeader />
    <div className="flex items-start justify-start w-full">
      <div className="w-[80px] 800px:w-[330px]">
      <ProfileSidebar active={4} />
      </div>
       <Userin/>
    </div>
  </div>
  )
}

export default UserInboxPage