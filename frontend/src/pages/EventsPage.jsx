import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import AddHeader from "../components/Layout/AddHeader";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";

const EventsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  const { allEvents, isLoading } = useSelector((state) => state.events);

  useEffect(() => {
    if (categoryData === null) {
      const d = allEvents;
      setData(d);
    } else {
      const d =
      allEvents && allEvents.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allEvents]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <AddHeader activeHeading={4} />
          <div className={`${styles.section}`}>
          {data && data.map((i, index) => <EventCard active={true} data={i} key={index} />)}
          {/* <EventCard active={true} data={allEvents && allEvents[0]} /> */}
        </div>
        <Footer/>
        </div>
      )}
    </>
  );
};
export default EventsPage;