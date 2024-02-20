import React from 'react'
import AddHeader from '../../components/Layout/AddHeader';
import ProfileSidebar from '../../components/Profile/ProfileSidebar';
import TrackOrderss from '../../components/Shop/TrackOrderss';

const TrackOrderssPage = () => {
  return (
    <div>
    <AddHeader />
    <div className="flex items-start justify-between w-full">
      <div className="w-[80px] 800px:w-[330px]">
      <ProfileSidebar active={5} />
      </div>
       <TrackOrderss/>
    </div>
  </div>
  )
}

export default TrackOrderssPage