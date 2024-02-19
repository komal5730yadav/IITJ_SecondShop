import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import UserOrderDetails from "../components/UserOrderDetails";
import AddHeader from '../components/Layout/AddHeader';

const OrderDetailsPage = () => {
  return (
    <div>
        <Header />
        <AddHeader/>
        <UserOrderDetails />
        <Footer />
    </div>
  )
}

export default OrderDetailsPage