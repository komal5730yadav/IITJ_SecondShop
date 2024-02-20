import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import UserAllOrders from '../components/Shop/UserAllOrders';

const UserAllOrdersPage = () => {
  return (
    <div>
    <AddHeader />
    <div className="flex w-full items-start justify-between">
      <div className="w-[80px] 800px:w-[330px]">
      <ProfileSidebar active={2}/>
      </div>
       <UserAllOrders/>
    </div>
  </div>
  )
}

export default UserAllOrdersPage