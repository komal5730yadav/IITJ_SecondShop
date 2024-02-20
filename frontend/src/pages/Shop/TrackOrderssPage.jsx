import React from 'react'
import AddHeader from '../../components/Layout/AddHeader';
import ProfileSidebar from '../../components/Profile/ProfileSidebar';
import TrackOrderss from '../../components/Shop/TrackOrderss';
import styles from '../../styles/styles';
const TrackOrderssPage = () => {
  return (
    <div>
    <AddHeader />
    <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
    <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
      <ProfileSidebar active={5} />
      </div>
      <div className="w-full justify-center flex">
       <TrackOrderss/>
       </div>
    </div>
  </div>
  )
}

export default TrackOrderssPage