import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Frequently from "../components/Frequently";
import Header from "../components/Header";
import HomeSecOne from "../components/HomeSecOne";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <HomeSecOne name="Enjoy on your TV." title="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
      <HomeSecOne dir="true" name="Download your shows to watch offline." title="Save your favorites easily and always have something to watch." img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
      <HomeSecOne name="Watch everywhere." title="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
      <HomeSecOne dir="true" name="Create profiles for kids." title="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." img="https://occ-0-2186-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" />
      <Frequently />
      <Footer />
    </>
  );
};

export default Home;
