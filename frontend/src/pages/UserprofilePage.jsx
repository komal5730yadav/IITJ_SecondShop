import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import UserProfile from '../components/Shop/UserProfile';
import styles from '../styles/styles';

const UserProfilePage = () => {
  return (
    <div>
    <AddHeader />
    <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
    <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
      <ProfileSidebar active={1}/>
      </div>
      <div className="w-full justify-center flex">
       <UserProfile/>
       </div>
    </div>
  </div>
  )
}

export default UserProfilePage;