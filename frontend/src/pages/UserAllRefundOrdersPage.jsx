import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import UserAllRefundOrders from '../components/Shop/UserAllRefundOrders';
import styles from '../styles/styles';
import UserDashboardHeader from '../components/Layout/UserDashboardHeader';
const UserAllRefundOrdersPage = () => {
  return (
    <div>
    <UserDashboardHeader />
    <div className="w-full flex">
    <div className="flex items-start justify-between w-full">
    <div className="w-[80px] 800px:w-[330px]">
      <ProfileSidebar active={3}/>
      </div>
      
       <UserAllRefundOrders/>
       </div>
    </div>
  </div>
  )
}

export default UserAllRefundOrdersPage;