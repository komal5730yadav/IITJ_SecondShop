import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import TrackOrder from "../components/Profile/TrackOrder";
import AddHeader from '../components/Layout/AddHeader';

const TrackOrderPage = () => {
  return (
    <div>
        <Header />
        <AddHeader/>
        <TrackOrder />
        <Footer />
    </div>
  )
}

export default TrackOrderPage