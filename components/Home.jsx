import React from 'react';
import Nav from "@/components/Nav";
import Image from "next/image";

const Home = () => {
   return (
       <div className="">
          <Image
              width={951}
              height={951}
              className="img z-10 blur-lg"
              src="/assets/Vector.png"
              alt="Vector"
          />
          <Nav/>

       </div>
   );
};

export default Home;