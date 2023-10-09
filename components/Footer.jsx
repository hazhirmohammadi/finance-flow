import React from 'react';

const Footer = () => {
   return (
       <div>
          <footer className="grid grid-cols-12">
             {/*****/}
             <div className="col-span-6 flex justify-start flex-col">
                <div>
                   <span>LOGO</span>
                   <h6>Menu</h6>
                </div>
                <div>
                   <div>
                      <span>Home</span>
                      <span>About</span>
                      <span>Pricing</span>
                   </div>
                   <div>
                      <span>Tokens</span>
                      <span>Blog</span>
                      <span>contact us</span>
                   </div>
                </div>
             </div>
             {/*****/}
             <div className="col-span-6">
                <div></div>
                <div>
                   <h5></h5>
                   <p></p>
                   <div>
                      <div></div>
                      <div></div>
                   </div>
                </div>
             </div>
          </footer>
       </div>
   );
};

export default Footer;