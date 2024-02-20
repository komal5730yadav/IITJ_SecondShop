import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import Userin from '../components/Shop/userin';
import styles from '../styles/styles';
const UserInboxPage = () => {
  return (
    <div>
    <AddHeader />
    <div className={`${styles.section} flex bg-[#f5f5f5] py-5`}>
    <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[15%]">
      <ProfileSidebar active={4} />
      </div>
      <div className="w-full justify-center flex pt-0">
       <Userin/>
       </div>
    </div>
  </div>
  )
}

export default UserInboxPage