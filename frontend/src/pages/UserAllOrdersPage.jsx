import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import UserAllOrders from '../components/Shop/UserAllOrders';
import styles from '../styles/styles';
const UserAllOrdersPage = () => {
  return (
    <div>
    <AddHeader />
    <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
    <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
      <ProfileSidebar active={2}/>
      </div>
      <div className="w-full justify-center flex">
       <UserAllOrders/>
       </div>
    </div>
  </div>
  )
}

export default UserAllOrdersPage