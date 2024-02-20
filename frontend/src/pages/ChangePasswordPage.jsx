import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ChangePassword from '../components/Shop/ChangePassword';

const ChangePasswordPage = () => {
  return (
    <div>
    <AddHeader />
    <div className="flex items-start justify-start w-full">
      <div className="w-[80px] 800px:w-[330px]">
      <ProfileSidebar active={6} />
      </div>
       <ChangePassword/>
    </div>
  </div>
  )
}

export default ChangePasswordPage;