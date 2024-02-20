import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import UserAllRefundOrders from '../components/Shop/UserAllRefundOrders';

const UserAllRefundOrdersPage = () => {
  return (
    <div>
    <AddHeader />
    <div className="flex w-full items-start justify-between">
      <div className="w-[80px] 800px:w-[330px]">
      <ProfileSidebar active={3}/>
      </div>
       <UserAllRefundOrders/>
    </div>
  </div>
  )
}

export default UserAllRefundOrdersPage;