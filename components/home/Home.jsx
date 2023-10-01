import React from 'react';
import Nav from "@/components/Nav";
import Image from "next/image";
import Hero from "@/components/Hero";
import Companys from "@/components/home/companys";

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
       </div>
   );
};

export default Home;