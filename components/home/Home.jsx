import React from 'react';
import Nav from "@/components/Nav";
import Image from "next/image";
import Hero from "@/components/Hero";
import Companys from "@/components/home/Companys";
import PortFolio from "@/components/home/PortFolio";
import HomeRewards from "@/components/home/HomeRewards";
import Comment from "@/components/home/Comment";
import GetStart from "@/components/home/GetStart";
import News from "@/components/home/News";

const Home = () => {
   return (
       <div className="">
          <Image
              width={951}
              height={951}
              className="img z-20 blur-lg"
              src="/assets/Vector.png"
              alt="Vector"
          />
          <Nav/>
          <Hero/>
          <Companys/>
          <PortFolio/>
          <HomeRewards/>
          <Comment/>
          <GetStart/>
          <News/>
       </div>
   );
};

export default Home;