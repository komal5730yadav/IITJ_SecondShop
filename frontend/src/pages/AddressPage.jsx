import React from 'react'
import AddHeader from '../components/Layout/AddHeader';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import Address from '../components/Shop/address';

const AddressPage = () => {
  return (
    <div>
    <AddHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
      <ProfileSidebar active={7} />
      </div>
       <Address/>
    </div>
  </div>
  )
}

export default AddressPage